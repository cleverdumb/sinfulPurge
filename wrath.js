function wrathInit() {
    sinPos = {x: 200, y: 200};
    sinSize = {w: 100, h: 100};
    sinInfo.lastShot = 0;
}

function wrathTick(dt) {
    // sinPos.x += 0.1 * dt;
    if (timeElapsed - sinInfo.lastShot >= 700) {
        sinInfo.lastShot = timeElapsed;
        entities.push(new Projectile({
            type: 'C',
            x: sinPos.x + sinSize.w/2,
            y: sinPos.y + sinSize.h/2,
            r: 10,
            vec: fromTo(sinPos.x + sinSize.w/2, sinPos.y + sinSize.h/2, pl.x, pl.y).toUnit().scale(0.3),
            color: 'orange'
        }))
        entities.push(new Projectile({
            type: 'C',
            x: sinPos.x + sinSize.w/2,
            y: sinPos.y + sinSize.h/2,
            r: 12,
            vec: fromTo(sinPos.x + sinSize.w/2, sinPos.y + sinSize.h/2, pl.x, pl.y).toUnit().scale(0.25),
            color: 'orange'
        }))

        let randOff = Math.random()*(2*Math.PI);
        let randAmt = Math.round(Math.random()*10)+5
        for (let x=0; x<randAmt; x++) {
            entities.push(new Projectile({
                type: 'C',
                x: sinPos.x + sinSize.w/2,
                y: sinPos.y + sinSize.h/2,
                r: 5,
                vec: new V(Math.cos(2*Math.PI*(x/randAmt) + randOff), Math.sin(2*Math.PI*(x/randAmt) + randOff)).scale(0.2),
                color: 'red'
            }))
        }

        // entities.push(new PolarProjectile({
        //     shape: 'C',
        //     origin: {
        //         x: sinPos.x + sinSize.w/2,
        //         y: sinPos.y + sinSize.h/2
        //     },
        //     r: 5,
        //     func: (dt, r, theta)=>{
        //         return {
        //             dr: 0,
        //             dtheta: 10
        //         }
        //     },
        //     color: 'green',
        //     start: {
        //         rad: 100,
        //         theta: 0
        //     }
        //     // lifespan: 3000
        // }))
    }
}