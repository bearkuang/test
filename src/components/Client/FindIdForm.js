const FindIdForm = () => {
  return (
    <div className="relative bg-white w-full h-[1052px] overflow-hidden text-center text-29xl text-black font-itim">
  
      <div className="absolute top-[302px] left-[362px] w-[730px] h-[360px] overflow-hidden text-mini text-gray">
        <img
          className="absolute top-[0px] left-[0px] rounded-3xs w-[730px] h-[360px]"
          alt=""
          src="C:\work_react\Recode2\src\components\Image\Rectangle 52.png"
        />
        <div className="absolute top-[281.5px] left-[15.5px] box-border w-[699px] h-px border-t-[1px] border-solid border-black" />
        <div className="absolute top-[43px] left-[16px] w-[698px] h-[197px] overflow-hidden">
          <div className="absolute top-[103px] left-[7px] flex items-center justify-center w-[43px] h-[19px]">
            이메일
          </div>
          <div className="absolute top-[139px] left-[0px] rounded-3xs bg-white box-border w-[698px] h-[50px] border-[1px] border-solid border-black" />
          <div className="absolute top-[139px] left-[7px] text-black text-left flex items-center w-[683px] h-[49px]">
            kimanydong1234@gmail.com
          </div>
          <div className="absolute top-[4px] left-[7px] flex items-center justify-center w-[43px] h-[19px]">
            닉네임
          </div>
          <input
          type="text"
          className="absolute top-[40px] left-[0px] rounded-3xs bg-white box-border w-[698px] h-[50px] border-[1px] border-solid border-black"
          placeholder="닉네임을 입력하세요"
        />
        </div>
        <div className="absolute top-[19px] left-[14px] flex items-center justify-center w-[300px] h-3.5">
          회원 가입 시 등록했던 이메일을 입력해주세요.
        </div>
        <div className="absolute top-[308px] left-[482px] text-xl text-cornflowerblue flex items-center justify-center w-[75px] h-[27px]">
          취소
        </div>
        <img
          className="absolute top-[308px] left-[580px] rounded-[30px] w-[77px] h-[27px]"
          alt=""
          src="/rectangle-52.svg"
        />
        <div className="absolute top-[307px] left-[580px] text-xl text-black flex items-center justify-center w-[77px] h-7">
          다음
        </div>
      </div>
      <div className="absolute top-[169px] left-[362.21px] w-[352.39px] h-[69px]">
        <div className="absolute top-[0px] left-[68.71px] flex items-center justify-center w-[283.68px] h-[69px]">
          아이디 찾기
        </div>
        <img
          className="absolute top-[12px] left-[0px] w-[36.32px] h-[45px] object-cover"
          alt=""
          src="/rightarrow-1@2x.png"
        />
      </div>
      <div className="absolute top-[246.5px] left-[22.5px] box-border w-[1396px] h-px border-t-[1px] border-solid border-black" />
    </div>
  );
};

export default FindIdForm;
