import { useRouter } from "next/router";

export default function useRouteBack() {
  const router = useRouter();

  function goBackHome() {
    router.push("/");
  }

  return { goBackHome };
}
