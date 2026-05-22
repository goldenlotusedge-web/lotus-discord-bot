# ✅ CHECKLIST DE VERIFICACIÓN - GOLDEN LOTUS 888

## 🔐 REQUISITOS PREVIOS

### 1. CONFIGURACIÓN EN DISCORD

- [ ] Canal `#verificacion` existe en el servidor
- [ ] Rol `Verificado✅` creado en el servidor
- [ ] Bot LOTUS tiene permiso de **Manage Roles**
- [ ] Bot LOTUS tiene permiso de **Send Messages**

### 2. PERMISOS DE CANALES

Para **TODOS LOS CANALES** (excepto #verificacion):
- [ ] @everyone: **DENEGAR**
- [ ] Rol `Verificado✅`: **PERMITIR**

Resultado esperado:
```
Usuarios sin verificar: NO pueden ver canales ❌
Usuarios con rol "Verificado✅": PUEDEN ver canales ✅
```

### 3. CONFIGURACIÓN EN config.json

Debe contener:
```json
{
  "token": "YOUR_BOT_TOKEN",
  "clientId": "YOUR_CLIENT_ID",
  "guildId": "YOUR_GUILD_ID",
  "channels": {
    "verification": "CANAL_ID_AQUI"
  },
  "roles": {
    "verified": "ROL_ID_AQUI"
  }
}
```

- [ ] `token`: Token del bot (secreto)
- [ ] `clientId`: ID de la aplicación
- [ ] `guildId`: ID del servidor Golden Lotus 888
- [ ] `channels.verification`: ID del canal #verificacion
- [ ] `roles.verified`: ID del rol Verificado✅

---

## 🔍 CÓMO OBTENER LOS IDs

### Obtener ID del Canal #verificacion:
```
1. Click derecho en #verificacion
2. "Copy Channel ID"
3. Pega en config.json → channels.verification
```

### Obtener ID del Rol Verificado✅:
```
1. Settings → Roles
2. Click derecho en "Verificado✅"
3. "Copy Role ID"
4. Pega en config.json → roles.verified
```

---

## 🧪 TEST DEL FLUJO

### Paso 1: Invita un usuario de prueba
```
1. Copia el link de invitación del servidor
2. Invita un usuario de prueba a Golden Lotus 888
```

### Paso 2: Bot debe enviar mensaje
```
El bot DEBE:
✅ Enviar mensaje en #verificacion
✅ Mostrar botón "✓ Verificar Ahora"
✅ Enviar DM al usuario con instrucciones
```

### Paso 3: Usuario hace clic
```
El usuario hace clic en "✓ Verificar Ahora"
```

### Paso 4: Verificación completada
```
El bot DEBE:
✅ Asignar rol "Verificado✅"
✅ Mostrar mensaje "✅ Verificación completada"
✅ Usuario puede acceder a todos los canales
```

---

## ❌ ERRORES COMUNES

| Error | Causa | Solución |
|-------|-------|----------|
| Usuario no recibe mensaje | Canal no existe o ID incorrecto | Verifica `channels.verification` |
| Botón aparece pero no asigna rol | Bot sin permisos "Manage Roles" | Dale permisos al bot |
| Usuario no ve canales después | Permisos de canales mal configurados | Revisa permisos @everyone vs rol |
| Bot no responde | Token incorrecto o no autenticado | Verifica `config.json` y token |
| DM no llega | Usuario tiene DMs desactivados | Es normal, no es error |

---

## 🚀 COMANDOS ÚTILES

### Iniciar el bot:
```bash
npm start
```

### Ver logs en tiempo real:
```bash
npm run dev
```

### Verificar dependencias:
```bash
npm list
```

---

## 📞 SOPORTE RÁPIDO

Si algo no funciona:
1. Verifica que el bot está ONLINE en Discord
2. Revisa la consola del bot para mensajes de error
3. Confirma que todos los IDs en `config.json` son correctos
4. Asegúrate que el bot tiene permisos en el servidor

---

**Sistema listo para Golden Lotus 888 🌸**
