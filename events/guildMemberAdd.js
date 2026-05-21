const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const config = require('../config.json');

module.exports = {
  name: 'guildMemberAdd',
  once: false,

  async execute(member, client) {
    try {
      const guild = member.guild;
      const verifyChannel = guild.channels.cache.get(config.verification.channelId);

      if (!verifyChannel) {
        console.warn(`⚠️ Canal de verificación no encontrado en ${guild.name}`);
        return;
      }

      console.log(`👤 ${member.user.tag} se unió a ${guild.name}`);

      // ====== CREAR EMBED DE VERIFICACIÓN ======
      const verificationEmbed = new EmbedBuilder()
        .setColor(config.colors.primary)
        .setTitle('🔐 Verificación Requerida')
        .setDescription(
          `¡Hola **${member.user.username}**! 👋\n\n` +
          `Para acceder a los canales del servidor, debes verificarte.\n\n` +
          `**¿Por qué?**\n` +
          `• Proteger la comunidad de bots maliciosos\n` +
          `• Mantener un servidor seguro\n\n` +
          `Haz clic en el botón de abajo para verificarte → `
        )
        .setThumbnail(guild.iconURL({ dynamic: true }))
        .setFooter({ text: 'Sistema de Seguridad LOTUS' })
        .setTimestamp();

      // ====== CREAR BOTÓN ======
      const verifyButton = new ButtonBuilder()
        .setCustomId('verify_button')
        .setLabel('✓ Verificar Ahora')
        .setStyle(ButtonStyle.Success)
        .setEmoji('🔓');

      const actionRow = new ActionRowBuilder().addComponents(verifyButton);

      // ====== ENVIAR MENSAJE ======
      await verifyChannel.send({
        content: `<@${member.id}>`,
        embeds: [verificationEmbed],
        components: [actionRow],
      });

      console.log(`📩 Mensaje de verificación enviado a ${member.user.tag}`);

      // ====== ENVIAR DM DE BIENVENIDA ======
      try {
        const dmEmbed = new EmbedBuilder()
          .setColor(config.colors.primary)
          .setTitle(`¡Bienvenido a ${guild.name}!`)
          .setDescription(
            `Hola ${member.user.username}! 👋\n\n` +
            `Nos alegra que te unas a nuestra comunidad.\n\n` +
            `📌 Dirígete a <#${config.verification.channelId}> y haz clic en el botón para verificarte.\n\n` +
            `¡Te esperamos! 🎉`
          )
          .setThumbnail(guild.iconURL({ dynamic: true }))
          .setFooter({ text: 'LOTUS' })
          .setTimestamp();

        await member.send({ embeds: [dmEmbed] });
        console.log(`📧 DM enviado a ${member.user.tag}`);
      } catch (error) {
        console.warn(`⚠️ No se pudo enviar DM a ${member.user.tag}`);
      }
    } catch (error) {
      console.error(`❌ Error en guildMemberAdd: ${error.message}`);
    }
  },
};
