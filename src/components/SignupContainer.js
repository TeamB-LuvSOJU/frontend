import { useState } from "react";
import eye from "../assets/eye.svg";
import { useNavigate } from "react-router-dom";

function SignUpContainer() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="mt-5 flex w-full p-4">
      <div className="flex h-[34rem] w-full flex-col items-center justify-center bg-[#fefefe] pb-7">
        <span className="font-DoHyeon mb-14 text-2xl">회원가입</span>
        <div className="flex flex-col items-start">
          <div className="mt-5 flex w-72 justify-between border-b-[1px] border-[#000000]">
            <input
              type="text"
              placeholder="닉네임"
              className="font-Pretendard placeholder:font-DoHyeon flex h-7 w-52 outline-none placeholder:text-sm placeholder:text-[#000000]"
            />
            <button className="flex h-6 w-16 items-center justify-center rounded-2xl bg-[#70d096] text-xs font-semibold">
              중복 체크
            </button>
          </div>
          <span className="text-xs font-medium text-[#5A5A5A]">*8자 이하</span>
          <div className="mt-4 flex w-72 justify-between border-b-[1px] border-[#000000]">
            <input
              type="text"
              placeholder="아이디"
              className="font-Pretendard placeholder:font-DoHyeon flex h-7 w-52 outline-none placeholder:text-sm placeholder:text-[#000000]"
            />
            <button className="flex h-6 w-16 items-center justify-center rounded-2xl bg-[#70d096] text-xs font-semibold">
              중복 체크
            </button>
          </div>
          <div className="mt-7 flex w-72 justify-between border-b-[1px] border-[#000000]">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호"
              className="font-Pretendard placeholder:font-DoHyeon flex h-7 w-52 outline-none placeholder:text-sm placeholder:text-[#000000]"
            />
            <img
              src={eye}
              alt="eye"
              className="flex hover:cursor-pointer"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            />
          </div>
          <span className="text-xs font-medium text-[#5a5a5a]">
            *대문자, 소문자, 숫자 활용하여 10글자 이상
          </span>
          <div className="mt-4 flex w-72 justify-between border-b-[1px] border-[#000000]">
            <input
              type="password"
              placeholder="비밀번호 확인"
              className="font-Pretendard placeholder:font-DoHyeon flex h-7 w-52 outline-none placeholder:text-sm placeholder:text-[#000000]"
            />
          </div>
        </div>
        <button className="font-DoHyeon mt-14 flex h-9 w-72 items-center justify-center rounded-3xl bg-[#70d096]">
          회원가입
        </button>
        <div className="mt-7 flex items-center justify-between space-x-20">
          <span className="font-DoHyeon text-xs font-light">
            이미 회원이신가요?
          </span>
          <span
            className="font-DoHyeon text-xs font-bold hover:cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인하기
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUpContainer;
