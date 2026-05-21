# 🌸 LOTUS Discord Bot - Sistema de Verificación

Un bot de Discord profesional y simple que automatiza el sistema de verificación de nuevos miembros.

## ✨ Características

✅ **Verificación con 1 clic** - Los usuarios solo necesitan hacer clic en un botón  
✅ **Mensajes profesionales** - Embeds bien diseñados y claros  
✅ **DMs automáticas** - Bienvenida y confirmación automáticas  
✅ **Fácil configuración** - Solo cambia el `config.json`  
✅ **Sin complicaciones** - Código limpio y simple de entender  
✅ **Escalable** - Fácil de agregar más funcionalidades  

## 🚀 Instalación Rápida

### 1. Requisitos previos
- Node.js v16.9.0 o superior
- Una cuenta de Discord
- Un servidor de Discord para pruebas

### 2. Instalar dependencias
```bash
npm install
```

### 3. Invitar el bot al servidor

Usa este link para agregar el bot a tu servidor (reemplaza `TU_APPLICATION_ID` con tu ID):

```
https://discord.com/oauth2/authorize?client_id=TU_APPLICATION_ID&permissions=268520448&scope=bot%20applications.commands
```

**¿Dónde obtener `TU_APPLICATION_ID`?**
1. Ve a [Discord Developer Portal](https://discord.com/developers/applications)
2. Selecciona tu aplicación
3. En la sección **General Information**, copia el **Application ID**
4. Reemplázalo en el link anterior

### 4. Configurar el bot en Discord Developer Portal

1. Ve a [Discord Developer Portal](https://discord.com/developers/applications)
2. Selecciona tu aplicación
3. Ve a **Bot** → **Add Bot** (si no existe)
4. Copia el **TOKEN** (⚠️ mantén esto secreto)
5. En **Privileged Gateway Intents**, activa:
   - ✅ Server Members Intent
   - ✅ Message Content Intent

### 5. Obtener IDs en Discord

Habilita **Modo Desarrollador** en Discord (User Settings → Advanced → Developer Mode)

Luego, clic derecho en:
- **Servidor** → "Copiar ID del Servidor" → `guildId`
- **Canal #verificacion** → "Copiar ID del Canal" → `channels.verification`
- **Rol @Verified** → "Copiar ID del Rol" → `roles.verified`

### 6. Completar `config.json`

```json
{
  "token": "YOUR_BOT_TOKEN_HERE",
  "clientId": "YOUR_APPLICATION_ID_HERE",
  "guildId": "YOUR_GUILD_ID_HERE",
  "channels": {
    "verification": "VERIFICATION_CHANNEL_ID_HERE"
  },
  "roles": {
    "verified": "VERIFIED_ROLE_ID_HERE"
  },
  "colors": {
    "primary": "#5865F2",
    "success": "#57F287",
    "error": "#ED4245"
  }
}
```

### 7. Crear roles en Discord

1. Ve a Configuración del Servidor → Roles
2. Crea un rol llamado "Verified" (exactamente así)
3. Asegúrate de que el bot tenga permisos para asignar este rol
4. En los canales, establece permisos:
   - **Denegar** @everyone
   - **Permitir** rol "Verified"

### 8. Ejecutar el bot

```bash
# Desarrollo
npm run dev

# Producción
npm start
```

## 📝 Cómo funciona

### Flujo del usuario:

1. **Nuevo miembro entra al servidor**
   - El bot detecta la entrada
   - Envía un mensaje en #verificacion
   - Envía un DM de bienvenida

2. **Usuario hace clic en "Verificar"**
   - El bot asigna el rol "Verified"
   - El usuario obtiene acceso a los canales
   - Recibe confirmación

## 🎨 Personalización

### Cambiar colores
En `config.json`:
```json
"colors": {
  "primary": "#5865F2",    // Color del embed principal
  "success": "#57F287",    // Color de éxito
  "error": "#ED4245"       // Color de error
}
```

### Cambiar mensajes
En `events/guildMemberAdd.js` y `events/interactionCreate.js`, edita las descripciones de los embeds.

### Cambiar botón
En `events/guildMemberAdd.js`, modifica:
```javascript
const verifyButton = new ButtonBuilder()
  .setCustomId('verify_button')
  .setLabel('Tu Texto Aquí')      // Cambiar texto
  .setStyle(ButtonStyle.Success)   // Cambiar estilo (Danger, Primary, Secondary, Success)
  .setEmoji('🔓');                 // Cambiar emoji
```

## 📂 Estructura del proyecto

```
lotus-discord-bot/
├── index.js                  # Archivo principal
├── config.json              # Configuración
├── package.json             # Dependencias
├── events/
│   ├── ready.js            # Evento cuando bot está listo
│   ├── guildMemberAdd.js   # Evento cuando entra nuevo miembro
│   └── interactionCreate.js # Evento para botones
└── README.md               # Este archivo
```

## 🐛 Solución de problemas

### El bot no responde
- Verifica que el token en `config.json` sea correcto
- Asegúrate de que el bot tiene permisos en el servidor

### No se envía el mensaje de verificación
- Verifica que `channels.verification` sea correcto
- Asegúrate de que el bot tiene permiso de escribir en ese canal

### No se asigna el rol
- Verifica que `roles.verified` sea correcto
- Asegúrate de que el rol del bot está por encima del rol "Verified"

### No se envía el DM
- El usuario puede tener los DMs desactivados
- No es un error, el bot intentará igual

## 📄 Licencia

MIT License - Eres libre de usar, modificar y distribuir este código.

## 🤝 Soporte

Si tienes problemas, verifica:
1. Que todos los IDs en `config.json` sean correctos
2. Que el bot tiene los permisos necesarios
3. Los logs de la consola para mensajes de error

---

**Hecho con ❤️ por LOTUS**
