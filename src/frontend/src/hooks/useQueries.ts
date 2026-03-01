import { useMutation, useQuery } from "@tanstack/react-query";
import type { BlogArticle, CaseStudy, Testimonial } from "../backend.d.ts";
import { useActor } from "./useActor";

export function useGetAllBlogArticles() {
  const { actor, isFetching } = useActor();
  return useQuery<BlogArticle[]>({
    queryKey: ["blogArticles"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBlogArticles();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllCaseStudies() {
  const { actor, isFetching } = useActor();
  return useQuery<CaseStudy[]>({
    queryKey: ["caseStudies"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCaseStudies();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllTestimonials() {
  const { actor, isFetching } = useActor();
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      phone,
      company,
      message,
    }: {
      name: string;
      email: string;
      phone: string;
      company: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      await actor.submitContact(name, email, phone, company, message);
    },
  });
}
