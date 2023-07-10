type BadgeTypes =
  | "react"
  | "javascript"
  | "typescript"
  | "react-native"
  | "scss"
  | "webpack"
  | "react-router"
  | "redux"
  | "nodejs"
  | "googlepay"
  | "aws"
  | "mui"
  | "mongo"
  | "python"
  | "chartjs"
  | "rails"
  | "bootstrap"
  | "mysql"
  | "redis"
  | "ruby"
  | "datadog"
  | "npm"
  | "rollup"
  | "styled-c"
  | "storybook"
  | "dynamo"
  | "swagger"
  | "rss"
  | "circleci"
  | "firebase"
  | "pg"
  | "sqlite"
  | "leetcode"
  | "angular"
  | "antd"
  | "django"
  | "drf"
  | "express"
  | "jquery"
  | "jwt"
  | "nextjs"
  | "nodemon"
  | "pug"
  | "rq"
  | "nestjs"
  | "socket"
  | "tw"
  | "godot"
  | "ghp"
  | "gcp"
  | "c"
  | "css"
  | "html"
  | "rust"
  | "java"
  | "go"
  | "solidity"
  | "docker"
  | "eslint"
  | "elastic"
  | "postman"
  | "nginx"
  | "jest"
  | "testinglib"
  | "git"
  | "babel"
  | "angularjs";

interface BadgeProps {
  type: BadgeTypes;
}

const badgeLinks: Record<BadgeTypes, string> = {
  react:
    "react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  javascript:
    "javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)",
  "react-native":
    "react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  typescript:
    "typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  scss: "SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
  webpack:
    "webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black",
  "react-router":
    "React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white",
  redux: "redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
  nodejs: "node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
  googlepay:
    "GooglePay-%233780F1.svg?style=for-the-badge&logo=Google-Pay&logoColor=white",
  aws: "AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
  mui: "MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white",
  mongo:
    "MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  python: "python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
  chartjs:
    "chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white",
  rails:
    "rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white",
  bootstrap:
    "bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
  mysql: "mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
  redis: "redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white",
  ruby: "ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white",
  datadog:
    "datadog-%23632CA6.svg?style=for-the-badge&logo=datadog&logoColor=white",
  npm: "NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white",
  rollup: "RollupJS-ef3335?style=for-the-badge&logo=rollup.js&logoColor=white",
  "styled-c":
    "styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
  storybook:
    "-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white",
  dynamo:
    "Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white",
  swagger:
    "-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white",
  rss: "rss-F88900?style=for-the-badge&logo=rss&logoColor=white",
  circleci:
    "circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white",
  firebase: "Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white",
  pg: "postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
  sqlite:
    "sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
  leetcode:
    "LeetCode-000000?style=for-the-badge&logo=LeetCode&logoColor=#d16c06",
  angular:
    "angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white",
  angularjs:
    "angular.js-%23E23237.svg?style=for-the-badge&logo=angularjs&logoColor=white",
  antd: "-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white",
  django:
    "django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
  drf: "DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray",
  express:
    "express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
  jquery:
    "joomla-%235091CD.svg?style=for-the-badge&logo=joomla&logoColor=white",
  jwt: "JWT-black?style=for-the-badge&logo=JSON%20web%20tokens",
  nestjs:
    "nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white",
  nextjs: "Next-black?style=for-the-badge&logo=next.js&logoColor=white",
  nodemon:
    "NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD",
  pug: "Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454",
  rq: "-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white",
  socket:
    "Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101",
  tw: "tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
  godot: "GODOT-%23FFFFFF.svg?style=for-the-badge&logo=godot-engine",
  ghp: "github%20pages-121013?style=for-the-badge&logo=github&logoColor=white",
  gcp: "GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white",
  c: "c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
  css: "css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  go: "go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
  html: "html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  java: "java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
  rust: "rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white",
  solidity:
    "Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white",
  babel: "Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black",
  docker:
    "docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
  eslint: "ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white",
  elastic: "-ElasticSearch-005571?style=for-the-badge&logo=elasticsearch",
  postman: "Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
  nginx: "nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white",
  jest: "-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white",
  testinglib:
    "-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white",
  git: "git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
};

const Badge = (props: BadgeProps) => {
  return (
    <img
      src={`https://img.shields.io/badge/${badgeLinks[props.type]}`}
      alt=""
    />
  );
};

export default Badge;
