class Fitdo {
    constructor(fitdo) {
        this.id = fitdo?.id ?? null;
        this.title = fitdo?.title ?? null;
        this.member_id = fitdo?.member_id ?? null;
        this.duration = fitdo?.duration ?? null;
        this.completed = fitdo?.completed ?? null;
        this.created_at = fitdo?.created_at ?? null;
        this.updated_at = fitdo?.updated_at ?? null;
    }
}