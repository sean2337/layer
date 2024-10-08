import { css } from "@emotion/react";
import Lottie from "lottie-react";
import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import CreateDone from "@/assets/lottie/space/create_done.json";
import { ButtonProvider, IconButton } from "@/component/common/button";
import { Icon } from "@/component/common/Icon";
import { Spacing } from "@/component/common/Spacing";
import { Typography } from "@/component/common/typography";
import { useApiGetUser } from "@/hooks/api/auth/useApiGetUser";
import { useApiGetSpace } from "@/hooks/api/space/useApiGetSpace";
import { useToast } from "@/hooks/useToast";
import { DefaultLayout } from "@/layout/DefaultLayout";
import { ProjectType } from "@/types/space";
import { shareKakao } from "@/utils/kakao/sharedKakaoLink";
import { encryptId } from "@/utils/space/cryptoKey";

export function CreateDonePage() {
  const navigate = useNavigate();
  const { spaceId } = useLocation().state as { spaceId: string };
  const { data: spaceData } = useApiGetSpace(spaceId);
  const [animate, setAnimate] = useState(spaceData?.category === ProjectType.Individual);
  const { data: userData } = useApiGetUser();
  const { toast } = useToast();

  const encryptedId = encryptId(spaceId);

  useEffect(() => {
    if (spaceData && spaceData.category === ProjectType.Team) {
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, [spaceData]);

  const handleShareKakao = () => {
    shareKakao(
      `${window.location.protocol}//${window.location.host}/space/join/${encryptedId}`,
      `${userData.name}님이 스페이스에 초대했습니다.`,
      "어서오세용~!!",
    );
  };

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}/space/join/${encryptedId}`);
      toast.success("복사 성공!!");
    } catch (e) {
      alert("failed");
    }
  };

  return (
    <>
      {spaceData && (
        <DefaultLayout
          LeftComp={
            <Icon
              size={2.4}
              icon="ic_arrow_left"
              css={css`
                cursor: pointer;
              `}
              onClick={() => navigate(-1)}
            />
          }
        >
          <Spacing size={2.4} />
          <span
            css={css`
              font-size: ${animate ? "1.6rem" : "2.4rem"};
              font-weight: bold;
              color: ${animate ? "#A9AFBB" : "#000000"};
              transition: all 0.5s ease;
              line-height: 3.2rem;
            `}
          >
            스페이스 생성 완료!
          </span>
          <Typography
            variant="T4"
            css={css`
              opacity: ${animate ? 1 : 0};
              transition: all 0.5s ease;
              white-space: pre-wrap;
              transition-delay: 0.5s;
            `}
          >{`어울리는 회고 템플릿을\n찾아볼까요?`}</Typography>
          <Spacing size={4} />
          <div
            css={css`
              position: relative;
              text-align: center;
              height: 27.6rem;
            `}
          >
            <Lottie
              animationData={CreateDone}
              loop={false}
              css={css`
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%, 0);
                transition: all 0.5s ease;
                height: auto;
                margin-bottom: 4rem;
                width: ${animate ? "24rem" : "33rem"};
              `}
            />
          </div>
          {spaceData.category === ProjectType.Team && (
            <Fragment>
              <IconButton
                onClick={handleShareKakao}
                icon="ic_kakao"
                css={css`
                  background-color: #ffe400;
                  color: #000000;
                  opacity: ${animate ? 1 : 0};
                  transition: all 0.5s ease;
                  transition-delay: 0.5s;
                `}
              >
                카카오톡 전달
              </IconButton>
              <Spacing size={0.8} />
              <IconButton
                onClick={handleCopyClipBoard}
                icon="ic_copy"
                css={css`
                  background-color: #f1f3f5;
                  color: #000000;
                  opacity: ${animate ? 1 : 0};
                  transition: all 0.5s ease;
                  transition-delay: 0.5s;
                `}
              >
                초대링크 복사
              </IconButton>
            </Fragment>
          )}
          <ButtonProvider>
            <ButtonProvider.Primary
              disabled={spaceData.category === ProjectType.Individual ? false : !animate}
              onClick={() => navigate(`/space/create/next`, { state: { spaceId } })}
            >
              다음
            </ButtonProvider.Primary>
          </ButtonProvider>
        </DefaultLayout>
      )}
    </>
  );
}
