import { FeedbacksRepository } from "../repositories/feedbacksRepository";

interface SubmitFeedbackUseCasesRequst {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCases {
        constructor(
        private feedbackRepository: FeedbacksRepository
    ) {}

    async execute(request: SubmitFeedbackUseCasesRequst) {
        const { type, comment, screenshot } = request;

        await this.feedbackRepository.create({ type, comment, screenshot });
    }
}