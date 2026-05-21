const { EmbedBuilder } = require('discord.js');
const config = require('../config.json');

module.exports = {
  name: 'interactionCreate',
  once: false,

  async execute(interaction, client) {
    try {
      // ====== MANEJAR BOTONES ======
      if (interaction.isButton()) {
        const { customId, user, guild, member } = interaction;

        if (customId === 'verify_button') {
          try {
            await interaction.deferReply({ ephemeral: true });

            // ====== OBTENER ROL DE VERIFICACIÓN ======
            const verifyRole = guild.roles.cache.get(config.verification.roleId);

            if (!verifyRole) {
              console.error(`❌ Rol de verificación no existe en ${guild.name}`);
              return interaction.editReply({
                embeds: [
                  new EmbedBuilder()
                    .setColor(config.colors.error)
                    .setTitle('❌ Error')
                    .setDescription('El rol de verificación no está configurado. Contacta a un administrador.'),
                ],
              });
            }

            // ====== VERIFICAR SI YA ESTÁ VERIFICADO ======
            if (member.roles.cache.has(verifyRole.id)) {
              return interaction.editReply({
                embeds: [
                  new EmbedBuilder()
                    .setColor(config.colors.success)
                    .setTitle('✅ Ya Estás Verificado')
                    .setDescription('Ya tienes acceso a todos los canales del servidor.'),
                ],
              });
            }

            // ====== ASIGNAR ROL ======
            await member.roles.add(verifyRole);
            console.log(`✅ ${user.tag} verificado en ${guild.name}`);

            // ====== RESPUESTA DE ÉXITO ======
            const successEmbed = new EmbedBuilder()
              .setColor(config.colors.success)
              .setTitle('✅ ¡Verificación Completada!')
              .setDescription(
                `¡Bienvenido **${user.username}**!\n\n` +
                `Ahora tienes acceso completo a todos los canales del servidor.\n\n` +
                `¡Que disfrutes tu estancia en **${guild.name}**! 🎉`
              )
              .setFooter({ text: 'LOTUS' })
              .setTimestamp();

            await interaction.editReply({ embeds: [successEmbed] });

            // ====== ENVIAR DM DE CONFIRMACIÓN ======
            try {
              const confirmEmbed = new EmbedBuilder()
                .setColor(config.colors.success)
                .setTitle('✅ Verificación Exitosa')
                .setDescription(
                  `¡Hola ${user.username}!\n\n` +
                  `Tu verificación en **${guild.name}** fue completada.\n` +
                  `Ahora puedes acceder a todos los canales.\n\n` +
                  `¡Que lo disfrutes! 🎉`
                )
                .setThumbnail(guild.iconURL({ dynamic: true }))
                .setFooter({ text: 'LOTUS' })
                .setTimestamp();

              await user.send({ embeds: [confirmEmbed] });
            } catch (error) {
              console.warn(`⚠️ No se pudo enviar DM de confirmación a ${user.tag}`);
            }
          } catch (error) {
            console.error(`❌ Error en verificación: ${error.message}`);
            return interaction.editReply({
              embeds: [
                new EmbedBuilder()
                  .setColor(config.colors.error)
                  .setTitle('❌ Error')
                  .setDescription('Ocurrió un error durante la verificación. Intenta más tarde.'),
              ],
            });
          }
        }
      }
    } catch (error) {
      console.error(`❌ Error en interactionCreate: ${error.message}`);
    }
  },
};
