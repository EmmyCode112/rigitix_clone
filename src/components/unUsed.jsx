<div className=" fixed z-50 h-screen overflow-hidden bg-white w-full left-0 top-0">
  <div className="p-5 flex  items-center">
    <div className="bg-black px-[60px] pt-[38px] pb-[79px] flex flex-col justify-between gap-[79px] rounded-[30px] h-full basis-[45%]">
      <img src={icons.rigitix} className="w-[105px]" alt="logo" />
    </div>
    <div className="flex flex-col items-center gap-6 lg:basis-[55%] lg:px-[133px]">
      <h2 className="text-2xl font-bold">OTP Verification</h2>
      <p>We've sent a verification code to {email}</p>
      <div className="flex gap-3" onPaste={handlePaste}>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            ref={(el) => (inputRefs.current[index] = el)}
            onChange={(e) => handleChange(index, e.target.value)}
            className="w-12 h-12 text-center border rounded text-xl font-bold"
          />
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <Button
        label={verifying ? "Verifying..." : "Continue"}
        onClick={verifyOtp}
        disabled={otp.join(" ").length !== 6 || verifying}
        className="py-2 px-6 rounded w-full bg-[#F87B07] text-white"
      />

      <div className="flex justify-between items-center gap-4 w-full">
        <div>
          Didn't receive the OTP? click to{" "}
          <Button
            label={resending ? "Sending..." : "Resend"}
            onClick={sendOtp}
            disabled={resending || countdown > 0}
            className={`border-none p-0 text-[#F87B07] bg-white ${
              resending || countdown > 0 ? "text-[#F87B07] bg-white" : ""
            }`}
          />
        </div>
        <div className="text-gray-700 text-lg font-semibold">
          {countdown > 0
            ? `Resend OTP in ${Math.floor(countdown / 60)}:${String(
                countdown % 60
              ).padStart(2, "0")}`
            : "You can resend OTP now."}
        </div>
      </div>
    </div>
  </div>
</div>;
