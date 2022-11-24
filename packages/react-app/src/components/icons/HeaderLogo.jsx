/* eslint react/jsx-props-no-spreading: off */
// ☝️ we want this component to be usable with chakra props
import React from "react";
import { chakra, useColorModeValue, useToken } from "@chakra-ui/react";

const HeaderLogo = props => {
  const [sreDefault, sreDarkDefault] = useToken("colors", ["sre.default", "sreDark.default"]);
  const fillColor = useColorModeValue(sreDefault, sreDarkDefault);

  return (
    <chakra.svg
      {...props}
      role="img"
      width="296"
      height="65"
      viewBox="0 0 296 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M287.832 8.55688H275.232V23.6178H277.791V31.1975H282.811V23.6178H287.832V8.55688V8.55688Z"
        fill="#A8E7F4"
      />
      <path d="M252.591 5.9975H250.031V8.55687H252.591V5.9975Z" fill={fillColor} />
      <path
        d="M270.211 0.977173H265.191V3.53655H262.632H260.072V5.99749H257.611V8.55686H252.591V11.0178H262.632V8.55686H265.191H267.652V5.99749H270.211H272.672V3.53655V0.977173H270.211Z"
        fill={fillColor}
      />
      <path d="M287.832 13.5771H285.272V16.1365H287.832V13.5771Z" fill="#29B8B8" fill-opacity="0.9624" />
      <path d="M285.371 18.5975H282.811V21.1568H285.371V18.5975Z" fill="#009E9E" />
      <path d="M280.35 13.5771H277.791V16.1365H280.35V13.5771Z" fill="#29B8B8" fill-opacity="0.9624" />
      <path
        d="M287.831 5.9975V3.53656H285.272H282.811H280.252H277.988H277.791H275.231V5.9975H272.672V8.55687H270.211V11.0178V13.4787V13.5772V15.9397H272.672V18.3022V18.4991V20.8616H275.231V18.4991V18.3022V15.9397V13.5772V13.4787V11.0178H277.791V8.55687H277.988H280.252H282.811H285.272H287.635H287.831H290.391V5.9975H287.831Z"
        fill={fillColor}
      />
      <path d="M275.231 3.53656H272.672V6.09594H275.231V3.53656Z" fill="#29B8B8" fill-opacity="0.9624" />
      <path d="M272.771 5.9975H270.211V8.55687H272.771V5.9975Z" fill="#29B8B8" fill-opacity="0.9624" />
      <path
        d="M285.272 31.1975V26.1772H282.811V31.1975H277.791V26.1772H275.232V31.1975V31.6897V41.3366H285.272V31.1975Z"
        fill="#29B8B8"
        fill-opacity="0.9624"
      />
      <path d="M285.272 41.3365H275.232V43.8959H285.272V41.3365Z" fill="#A8E7F4" />
      <path
        d="M272.672 43.7975H285.272V46.3569H287.831V53.9365H282.811V51.3772H277.791V53.9365H272.672V51.3772V43.7975Z"
        fill="#017171"
      />
      <path d="M287.832 26.1772H285.272V31.1975H287.832V26.1772Z" fill="#A8E7F4" />
      <path d="M292.852 31.1975H287.831V33.7569H292.852V31.1975Z" fill="#A8E7F4" />
      <path d="M275.231 31.1975V26.1772H272.672V28.7366H270.113V31.2959H272.672H275.231V31.1975Z" fill="#A8E7F4" />
      <path d="M270.211 31.1975H267.652V36.2178H270.211V31.1975Z" fill="#A8E7F4" />
      <path d="M295.411 28.7365H292.852V31.2959H295.411V28.7365Z" fill="#A8E7F4" />
      <path d="M272.771 36.2178H270.211V38.7772H272.771V36.2178Z" fill="#A8E7F4" />
      <path d="M272.672 53.9366H270.113V56.4959H272.672H275.231V53.9366H272.672Z" fill="#A8E7F4" />
      <path d="M270.211 53.9366H267.652V58.9569H270.211V53.9366Z" fill={fillColor} />
      <path
        d="M282.811 53.9366V56.3975H285.272V58.8584V61.4178H287.832V58.8584V56.3975V56.2991V53.9366H282.811Z"
        fill="#A8E7F4"
      />
      <path d="M290.293 61.4178H285.272V63.9772H290.293V61.4178Z" fill={fillColor} />
      <path
        d="M4.29354 32.8479C6.76435 34.2796 10.2073 35.0977 13.9743 35.0977C23.0069 35.0977 28.1915 31.9889 28.1915 26.5484C28.1915 20.7398 23.1284 17.5491 13.9338 17.5491C13.1642 17.5491 12.6781 17.1401 12.6781 16.4038C12.6781 15.7902 13.2452 15.2993 13.9743 15.2993C14.7033 15.2993 15.2299 15.7493 15.2299 16.3629C15.2299 16.6492 15.4324 16.6901 15.554 16.6901H27.665C27.827 16.6901 27.908 16.6083 27.908 16.4856C27.908 13.9085 26.4903 11.7405 23.817 10.1861C21.3462 8.75438 17.9032 7.97717 14.1768 7.97717C6.3593 7.97717 0 11.945 0 16.8537C0 22.1306 5.14415 25.1576 14.0553 25.1985C15.0679 25.1985 15.6755 25.6894 15.6755 26.5075C15.6755 27.1211 15.1084 27.6119 14.4603 27.6119C13.6502 27.6119 13.1642 27.162 13.1642 26.3848C13.1642 26.2621 13.0426 26.1802 12.9211 26.1802H0.445556C0.283536 26.1802 0.202525 26.2621 0.202525 26.3848C0.202525 29.0436 1.6202 31.2526 4.29354 32.8479Z"
        fill={fillColor}
      />
      <path
        d="M48.6294 26.6302C53.733 26.6302 57.743 22.4578 57.743 17.1401C57.743 12.0678 53.652 7.97717 48.6294 7.97717H31.6983C31.6578 7.97717 31.5363 7.97717 31.5363 8.1817V34.9341C31.5363 34.975 31.5363 35.0568 31.6983 35.0568H44.0523C44.1738 35.0568 44.2548 34.975 44.2548 34.8523V26.8347V26.6302H44.4574H48.6294ZM44.0928 19.1035H43.8498V18.8581V15.9538V15.7084H44.0928H44.9029C45.8751 15.7084 46.6446 16.4856 46.6446 17.4264C46.6446 18.4081 45.8751 19.1444 44.9029 19.1444H44.0928V19.1035Z"
        fill={fillColor}
      />
      <path
        d="M87.4161 35.0568C87.5376 35.0568 87.5781 35.0159 87.5781 34.8932V27.4074C87.5781 27.3665 87.5781 27.2847 87.4161 27.2847H73.5228V27.2847C73.411 27.2847 73.3203 27.192 73.3203 27.0802V27.0802V25.7303V25.7303C73.3203 25.6184 73.411 25.5258 73.5228 25.5258V25.5258H82.4745C82.5555 25.5258 82.596 25.5257 82.596 25.3621V17.7537C82.596 17.59 82.5555 17.59 82.4745 17.59H73.5228V17.59C73.411 17.59 73.3203 17.4974 73.3203 17.3855V17.3855V16.0356V16.0356C73.3203 15.9238 73.411 15.8311 73.5228 15.8311V15.8311H87.4161C87.5376 15.8311 87.5781 15.7902 87.5781 15.6675V8.1408C87.5781 8.01808 87.5376 7.97717 87.4161 7.97717H61.2498C61.1283 7.97717 61.0878 8.09989 61.0878 8.1408V34.9341C61.0878 35.0159 61.1688 35.0568 61.2498 35.0568H87.4161Z"
        fill={fillColor}
      />
      <path
        d="M117.251 7.97717H91.0849C90.9634 7.97717 90.9229 8.09989 90.9229 8.1408V34.9341C90.9229 35.0159 91.0039 35.0568 91.0849 35.0568H117.251C117.373 35.0568 117.413 35.0159 117.413 34.8932V27.4074C117.413 27.3665 117.413 27.2847 117.251 27.2847H103.358V27.2847C103.246 27.2847 103.155 27.192 103.155 27.0802V27.0802V25.7303V25.7303C103.155 25.6184 103.246 25.5258 103.358 25.5258V25.5258H112.31C112.391 25.5258 112.431 25.5257 112.431 25.3621V17.7537C112.431 17.59 112.391 17.59 112.31 17.59H103.358V17.59C103.246 17.59 103.155 17.4974 103.155 17.3855V17.3855V16.0356V16.0356C103.155 15.9238 103.246 15.8311 103.358 15.8311V15.8311H117.251C117.373 15.8311 117.413 15.7902 117.413 15.6675V8.43995C117.413 8.24179 117.449 7.97717 117.251 7.97717V7.97717Z"
        fill={fillColor}
      />
      <path
        d="M133.491 7.97717H120.934C120.813 7.97717 120.772 8.09989 120.772 8.1408V34.9341C120.772 35.0159 120.853 35.0568 120.934 35.0568H133.451C140.903 35.0568 146.979 29.0027 146.979 21.517C146.979 14.0721 140.944 7.97717 133.491 7.97717ZM133.653 23.0305H132.721H132.478V22.7851V19.5535V19.3081H132.721H133.653C134.706 19.3081 135.557 20.1671 135.557 21.1897C135.557 22.2124 134.747 23.0305 133.653 23.0305Z"
        fill={fillColor}
      />
      <path
        d="M170.779 25.5667L170.617 25.3621L170.86 25.2803C174.1 23.8895 176.288 20.5352 176.288 16.9764C176.288 11.6587 172.48 7.97717 167.053 7.97717H150.486C150.405 7.97717 150.324 8.01808 150.324 8.1408V34.8932C150.324 35.0159 150.405 35.0568 150.486 35.0568H161.625C161.706 35.0568 161.787 35.0159 161.787 34.8932V29.9845L164.379 35.0159C164.42 35.0568 164.42 35.0977 164.501 35.0977H176.976C177.017 35.0977 177.098 35.0977 177.138 35.0159C177.179 34.975 177.179 34.8932 177.138 34.8523L170.779 25.5667ZM162.678 18.6536H161.908H161.665V18.4081V15.5447V15.2993H161.908H162.678C163.65 15.2993 164.46 16.0356 164.46 16.9764C164.46 17.9173 163.691 18.6536 162.678 18.6536Z"
        fill={fillColor}
      />
      <path
        d="M194.245 35.0568C201.86 35.0568 208.058 29.0027 208.058 21.5988V8.1408C208.058 8.01808 207.977 7.97717 207.896 7.97717H195.582C195.501 7.97717 195.461 8.05898 195.461 8.1408V21.3943C195.461 22.0488 194.934 22.5805 194.286 22.5805C193.638 22.5805 193.111 22.0488 193.111 21.3943V8.1408C193.111 8.01808 193.071 7.97717 192.99 7.97717H180.676C180.595 7.97717 180.514 8.01808 180.514 8.1408V21.5988C180.433 29.0436 186.63 35.0568 194.245 35.0568Z"
        fill={fillColor}
      />
      <path
        d="M224.202 21.1488C224.324 21.1488 224.445 21.2716 224.445 21.3943L226.187 34.8932C226.227 34.975 226.268 35.0568 226.308 35.0568H238.662C238.743 35.0568 238.824 34.975 238.824 34.9341V8.14081C238.824 8.01809 238.703 7.97719 238.662 7.97719H226.389C226.308 7.97719 226.268 8.059 226.268 8.14081V21.3125C226.268 21.4761 226.146 21.5579 226.025 21.5579C225.903 21.5579 225.782 21.4352 225.782 21.3125L224.081 8.0999C224.081 8.01809 224.04 7.93628 223.878 7.93628H211.524C211.443 7.93628 211.402 8.01809 211.402 8.0999V34.8932C211.402 34.975 211.443 35.0159 211.524 35.0159H223.797C223.878 35.0159 223.959 34.9341 223.959 34.8932V21.3943C223.999 21.2716 224.081 21.1488 224.202 21.1488Z"
        fill={fillColor}
      />
      <path
        d="M0.729075 64.0228H26.0448C26.1663 64.0228 26.2068 63.9819 26.2068 63.8592V56.5371C26.2068 56.4962 26.2068 56.4144 26.0448 56.4144H12.5971H12.3945V56.2098V54.9009V54.6963H12.5971H21.2246C21.3057 54.6963 21.3462 54.6963 21.3462 54.5327V47.1697C21.3462 47.006 21.3057 47.006 21.2246 47.006H12.5971H12.3945V46.8015V45.4925V45.2471H12.5971H26.0042C26.1258 45.2471 26.1663 45.2062 26.1663 45.0835V37.7613C26.1663 37.6386 26.1258 37.5977 26.0042 37.5977H0.729075C0.60756 37.5977 0.567055 37.6795 0.567055 37.7613V63.9001C0.52655 63.9819 0.60756 64.0228 0.729075 64.0228Z"
        fill={fillColor}
      />
      <path
        d="M54.1553 50.7694C54.2363 50.7694 54.2768 50.7285 54.2768 50.6467V37.7204C54.2768 37.6386 54.2363 37.5977 54.1553 37.5977H28.3536C28.2726 37.5977 28.2321 37.6386 28.2321 37.7204V50.6467C28.2321 50.7285 28.2726 50.7694 28.3536 50.7694H34.9964H35.1989V50.9739V63.9001C35.1989 63.9819 35.2394 64.0228 35.3204 64.0228H47.1479C47.2289 64.0228 47.31 63.941 47.31 63.9001V50.9739V50.7694H47.5125H54.1553Z"
        fill={fillColor}
      />
      <path
        d="M71.613 63.8592C71.613 63.9819 71.694 64.0228 71.775 64.0228H83.8455C83.9265 64.0228 83.967 63.941 83.967 63.8592V37.7613C83.967 37.6795 83.886 37.5977 83.8455 37.5977H71.775C71.694 37.5977 71.613 37.6795 71.613 37.7613V47.006V47.2106H71.4104H69.8307H69.6282V47.006V37.7613C69.6282 37.6795 69.5877 37.5977 69.4662 37.5977H57.3957C57.3147 37.5977 57.2742 37.6795 57.2742 37.7613V63.8592C57.2742 63.941 57.3147 64.0228 57.3957 64.0228H69.4662C69.5877 64.0228 69.6282 63.9819 69.6282 63.8592V55.2281V55.0645H69.8307H71.4104H71.613V55.269V63.8592V63.8592Z"
        fill={fillColor}
      />
      <path
        d="M88.0175 64.0228H113.333C113.455 64.0228 113.495 63.9819 113.495 63.8592V56.5371C113.495 56.4962 113.495 56.4144 113.333 56.4144H99.926H99.7235V56.2098V54.9009V54.6963H99.926H108.554C108.635 54.6963 108.675 54.6963 108.675 54.5327V47.1697C108.675 47.006 108.635 47.006 108.554 47.006H99.926H99.7235V46.8015V45.4925V45.2471H99.926H113.333C113.455 45.2471 113.495 45.2062 113.495 45.0835V37.7613C113.495 37.6386 113.455 37.5977 113.333 37.5977H88.0175C87.896 37.5977 87.8555 37.6795 87.8555 37.7613V63.9001C87.8555 63.9819 87.9365 64.0228 88.0175 64.0228Z"
        fill={fillColor}
      />
      <path
        d="M136.705 54.7781L136.583 54.5736L136.826 54.4918C139.945 53.1419 142.051 49.8694 142.051 46.3925C142.051 41.2383 138.406 37.5977 133.14 37.5977H117.141C117.019 37.5977 116.979 37.6386 116.979 37.7613V63.8592C116.979 63.9819 117.019 64.0228 117.141 64.0228H127.875C127.996 64.0228 128.037 63.9819 128.037 63.8592V59.605L130.548 63.9819C130.588 64.0228 130.588 64.0228 130.669 64.0228H142.74C142.78 64.0228 142.861 64.0228 142.902 63.941C142.942 63.9001 142.942 63.8592 142.902 63.8183L136.705 54.7781ZM128.887 48.0696H128.118H127.875V47.8242V44.9608V44.7153H128.118H128.887C129.859 44.7153 130.669 45.4925 130.669 46.3925C130.629 47.3333 129.859 48.0696 128.887 48.0696Z"
        fill={fillColor}
      />
      <path
        d="M145.575 64.0228H170.891C171.013 64.0228 171.053 63.9819 171.053 63.8592V56.5371C171.053 56.4962 171.053 56.4144 170.891 56.4144H157.484H157.281V56.2098V54.9009V54.6963H157.484H166.071C166.152 54.6963 166.192 54.6963 166.192 54.5327V47.1697C166.192 47.006 166.152 47.006 166.071 47.006H157.443H157.241V46.8015V45.4925V45.2471H157.443H170.85C170.972 45.2471 171.013 45.2062 171.013 45.0835V37.7613C171.013 37.6386 170.972 37.5977 170.85 37.5977H145.535C145.413 37.5977 145.373 37.6795 145.373 37.7613V63.9001C145.413 63.9819 145.454 64.0228 145.575 64.0228Z"
        fill={fillColor}
      />
      <path
        d="M200.419 37.7613C200.419 37.6386 200.379 37.5977 200.257 37.5977H188.389C188.308 37.5977 188.268 37.6795 188.268 37.7613V50.6876C188.268 51.3421 187.782 51.8329 187.134 51.8329C186.485 51.8329 185.999 51.3421 185.999 50.6876V37.7613C185.999 37.6795 185.959 37.5977 185.878 37.5977H174.01C173.888 37.5977 173.848 37.6386 173.848 37.7613V50.8921C173.848 58.1324 179.843 64.0228 187.174 64.0228C194.505 64.0228 200.5 58.1324 200.5 50.8921V37.7613H200.419Z"
        fill={fillColor}
      />
      <path
        d="M235.173 64.0228H246.919C247 64.0228 247.041 63.9819 247.041 63.9001V37.7613C247.041 37.6795 247 37.5977 246.919 37.5977H227.841C227.801 37.5977 227.76 37.5977 227.72 37.8022L226.099 43.6927C226.018 43.979 225.816 44.1426 225.492 44.1426C225.208 44.1426 225.006 43.979 224.884 43.6927L223.224 37.8022C223.142 37.5977 223.143 37.5977 223.102 37.5977H204.024C203.943 37.5977 203.903 37.6795 203.903 37.7613V63.9001C203.903 63.9819 203.943 64.0228 204.024 64.0228H215.771C215.852 64.0228 215.892 63.9819 215.892 63.9001V54.5327C215.892 54.2464 216.135 53.9191 216.459 53.9191C216.743 53.9191 216.986 54.1236 217.107 54.4509L220.024 63.941C220.024 63.9819 220.064 64.0228 220.064 64.0228C220.064 64.0228 220.105 64.0228 220.145 64.0228H230.879C230.919 64.0228 230.919 64.0228 230.96 64.0228C230.96 64.0228 230.96 63.9819 231 63.941L233.917 54.4509C233.998 54.1236 234.241 53.9191 234.565 53.9191C234.889 53.9191 235.132 54.2464 235.132 54.5327V63.9001C235.01 63.9819 235.091 64.0228 235.173 64.0228Z"
        fill={fillColor}
      />
    </chakra.svg>
  );
};

export default HeaderLogo;
