import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CaseStudy {
    result: string;
    title: string;
    challenge: string;
    strategy: string;
    industry: string;
}
export type Time = bigint;
export interface ContactSubmission {
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export interface BlogArticle {
    title: string;
    date: Time;
    readTime: bigint;
    excerpt: string;
    category: string;
}
export interface Testimonial {
    review: string;
    starRating: bigint;
    clientName: string;
    role: string;
    company: string;
}
export interface backendInterface {
    getAllBlogArticles(): Promise<Array<BlogArticle>>;
    getAllCaseStudies(): Promise<Array<CaseStudy>>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    getBlogArticleByTitle(title: string): Promise<BlogArticle>;
    getCaseStudyByTitle(title: string): Promise<CaseStudy>;
    getContactSubmissionByTimestamp(timestamp: string): Promise<ContactSubmission>;
    getTestimonialByClientName(clientName: string): Promise<Testimonial>;
    submitContact(name: string, email: string, phone: string, company: string, message: string): Promise<void>;
}
