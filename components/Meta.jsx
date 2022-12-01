import React from "react";
import Head from "next/head";

const Meta = ({ title, keyword, desc, image }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
        <meta property="og:url" content="https://vcoincheck.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={image} />
        <meta property="og:image:secure_url" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vcoincheck.io" />
        <meta property="twitter:url" content="https://vcoincheck.io/" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={image} />

      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "vCoinCheck",
  keyword: "VcoinCheck",
  desc: "vCoinCheck is a website built with content from the community. Those who want to know if a Blockchain project is good or not can evaluate Blockchain projects for themselves by answering the questions in Vcoincheck. Vcoincheck will let users know if the project is good or not through the user's answers. In addition, the community can see the reviews of knowledgeable people to get objective information about a project",
  image: "https://i.ibb.co/SRV3JTM/vcoincheck.png"
};

export default Meta;
