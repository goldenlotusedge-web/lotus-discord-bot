const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const config = require('../config.json');

module.exports = {
  name: 'interactionCreate',
  once: false,

  async execute(interaction, client) {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'verify_button') {
      const member = interaction.member;

      const verifiedRole = interaction.guild.roles.cache.get(
        config.verification.verifiedRoleId
      );

      if (!verifiedRole) {
        return interaction.reply({
          content: '❌ Rol de verificación no encontrado.',
          ephemeral: true
        });
      }

      // ✅ FIX: nombre consistente
      if (member.roles.cache.has(verifiedRole.id)) {
        return interaction.reply({
          content: '✔ Ya estás verificado.',
          ephemeral: true
        });
      }

      try {
        await member.roles.add(verifiedRole.id);

        return interaction.reply({
          content: '✅ Verificación completada. Bienvenido a LOTUS.',
          ephemeral: true
        });

      } catch (error) {
        console.error(error);

        return interaction.reply({
          content: '❌ Error al asignar el rol.',
          ephemeral: true
        });
      }
    }
  }
};
