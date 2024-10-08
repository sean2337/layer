import { atomWithReset } from "jotai/utils";

import { RetrospectCreateReq } from "@/types/retrospectCreate";

export const retrospectCreateAtom = atomWithReset<RetrospectCreateReq>({
  title: "",
  introduction: "",
  questions: [],
  deadline: "",
  isNewForm: false,
  hasChangedOriginal: false,
});
