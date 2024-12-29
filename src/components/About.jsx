import { useState, useEffect } from "react";
import CustomLoadingButton from "./LoadingButton";

export default function About() {
  return (
    <>
      <p>
        あほっこ動物は、<strong>あほな動物たち</strong>のことを指します。
        不定期でさまざまな個性豊かな動物たちが誕生します。
        この何とも言えない表情が魅力的。
      </p>
      <p>
        名前がある動物もいれば、ない動物もいます。
        どの動物も、見ているだけで癒やされること間違いなし！
      </p>
    </>
  );
}