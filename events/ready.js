module.exports = {
  name: 'ready',
  once: true,

  execute(client) {
    console.log(`✅ Bot conectado como ${client.user.tag}`);
    console.log(`📊 Sirviendo a ${client.guilds.cache.size} servidor(es)`);
    
    // Establecer actividad
    client.user.setActivity('verificaciones de servidor', { type: 'WATCHING' });
  },
};
