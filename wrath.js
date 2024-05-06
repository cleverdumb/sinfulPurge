function wrathInit() {
    sinPos = {x: 200, y: 200};
    sinSize = {w: 100, h: 100};
    sinInfo.lastShot = 0;
}

function wrathTick(dt) {
    // sinPos.x += 0.1 * dt;
    if (timeElapsed - sinInfo.lastShot >= 500) {
        sinInfo.lastShot = timeElapsed;
        entities.push(new Projectile({
            shape: 'C',
            x: sinPos.x + sinSize.w/2,
            y: sinPos.y + sinSize.h/2,
            r: 10,
            vec: fromTo(sinPos.x + sinSize.w/2, sinPos.y + sinSize.h/2, pl.x, pl.y).toUnit().scale(0.3),
            color: 'orange'
        }))
    }
}