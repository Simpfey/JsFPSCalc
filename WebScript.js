class ConsoleFps {
    constructor(maxFps, func) {
        this.maxFps = maxFps;

        this.fps = 0;
        this.fpsbuffer = 0;

        this.start = Date.now();
        this.millis = 0;

        setInterval(() => {
            this.fpsbuffer += 1;
            this.millis = Date.now() - this.start;
            if (Math.floor(this.millis / 1000) == 1) {
                this.fps = this.fpsbuffer;
                this.start = Date.now();
                this.fpsbuffer = 0;
            }
            func();
        },
        1000 / this.maxFps 
        )
    }
}