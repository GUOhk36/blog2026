import { clientEnv } from "@/lib/env/client.env";

const env = clientEnv();

export const blogConfig = {
  title: env.VITE_BLOG_TITLE || "Clog",
  name: env.VITE_BLOG_NAME || "MemoFragments",
  author: env.VITE_BLOG_AUTHOR || "作者",
  description:
    env.VITE_BLOG_DESCRIPTION || "小满胜万全，人生只言片语碎片呓语，尘埃记录时代。",
  social: {
    github: env.VITE_BLOG_GITHUB || "https://github.com/example",
    email: env.VITE_BLOG_EMAIL || "abertaglar@proton.com",
  },
  theme: {
    fuwari: {
      homeBg: env.VITE_FUWARI_HOME_BG || "/images/home-bg.jpg",
      avatar: env.VITE_FUWARI_AVATAR || "/images/avatar.png",
    },
  },
};

export type BlogConfig = typeof blogConfig;
