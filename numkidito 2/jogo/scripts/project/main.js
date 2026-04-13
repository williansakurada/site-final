runOnStartup(async runtime => {

    let pPodeTomar = true;
    let vPodeTomar = true;

    runtime.addEventListener("tick", async () => {

        const p = runtime.objects.p.getFirstInstance();
        const v = runtime.objects.v.getFirstInstance();

        if (!p || !v) return;

        // ─── JOGADOR TOMA DANO ───────────────────────────────────
        if (
            v.animationName === "atacando" &&
            v.testOverlap(p) &&
            p.animationName !== "defend" &&
            pPodeTomar
        ) {
            pPodeTomar = false;
            runtime.globalVars.pvida -= 1;
            await runtime.sleep(1000);
            pPodeTomar = true;
        }

        // ─── INIMIGO TOMA DANO ───────────────────────────────────
        if (
            p.animationName === "atack" &&
            p.testOverlap(v) &&
            vPodeTomar
        ) {
            vPodeTomar = false;
            runtime.globalVars.vvida -= 1;
            await runtime.sleep(1000);
            vPodeTomar = true;
        }

    });
});