porcentaje = Math.round(Math.random()*100);
emote_adpt = ``;
if (porcentaje >= 90){
    emote_adpt = `angarH `;
} else if (porcentaje >= 70 && porcentaje < 90) {
    emote_adpt = `angarShy `;
} else if (porcentaje >= 50 && porcentaje < 70) {
    emote_adpt = `angarJu `;
} else if (porcentaje >= 30 && porcentaje < 50) {
    emote_adpt = `angarG `;
} else if (porcentaje >= 10 && porcentaje < 30) {
    emote_adpt = `angarSadge `;
} else if (porcentaje >= 0 && porcentaje < 10) {
    emote_adpt = `angarSad `;
}

if (q) {
    user = u;
    touser = t;
    query = q;
    query = query.replace(/@/g, '');
    espacios = query.split(" ").length - 1;
    mensaje = null;
    if (espacios > 0 && espacios <= 1) {
        split = query.split(" ");
        ship = `${split[0]} y ${split[1]}`;
        letras_nombre1 = split[0].substring(0, 3);
        letras_nombre2 = split[1].substring(split[1].length - 2);
        nombre_ship = `${letras_nombre1}${letras_nombre2}`;
        if (split.length == 2) {
            mensaje = `❤️ ${ship} son ${porcentaje}% compatibles. El nombre del ship es: ${nombre_ship}. ${emote_adpt}`;
        }
        mensaje;
    } else if (espacios >= 2) {
        emote_adpt = `angarG `;
        mensaje = `${user}, No tengo la capacidad de calcular la compatibilidad con más de 2 personas. ${emote_adpt}`;
    } else if (user.toLowerCase() == touser.toLowerCase()) {
        emote_adpt = `angarMonkas `;
        mensaje = `${user}, Acaso estas tratando de ver si eres compatible contigo mismo? ${emote_adpt}`;
    } else {
        ship = `${user} y ${touser}`;
        letras_nombre1 = user.substring(0, 3);
        letras_nombre2 = touser.substring(touser.length - 2);
        nombre_ship = `${letras_nombre1}${letras_nombre2}`;
        mensaje = `❤️ ${ship} son ${porcentaje}% compatibles. El nombre del ship es: ${nombre_ship}. ${emote_adpt}`;
        mensaje;
    }
} else {
    emote_adpt = `angarJu `;
    mensaje = `${user}, Menciona a alguien para descubrir tu compatibilidad o otras dos personas para saber la de ellos. ${emote_adpt}`;
    mensaje;
}