import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import PlayIcon from 'icons/play.inline.svg';

import featureLineSvg from './images/feature-line.svg';
import LineSvg from './images/line.inline.svg';

const items = [
  {
    text: 'Data Recovery with Branching',
    linkText: 'Read blog post',
    linkUrl: '/', // TODO: add missing link
  },
  {
    text: 'CI/CD with Branching and GitHub Actions',
    linkText: 'Read blog post',
    linkUrl: '/', // TODO: add missing link
  },
  {
    text: 'Serverless driver technical post',
    linkText: 'Read blog post',
    linkUrl: '/', // TODO: add missing link
  },
];

const Partners = () => (
  <section className="branching safe-paddings  bg-black pt-[672px] text-white">
    <Container className="grid-gap-x grid grid-cols-12" size="md">
      <div className="ml col-span-4 flex justify-center">
        <img
          className="-mt-20 ml-[74px]"
          src={featureLineSvg}
          width={144}
          height={784}
          alt="feature/auth"
          loading="lazy"
        />
      </div>
      <div className="relative col-span-8 ml-auto mr-[50px] flex max-w-[940px] flex-col items-center">
        <LineSvg className="absolute bottom-[calc(100%+2rem)] left-1/2 h-auto w-[752px] -translate-x-[calc(50%+22.5rem)]" />
        <time className="label-secondary-2 mx-auto" dateTime="2022-12-07">
          8th of December, 2022
        </time>
        <Heading className="mt-2.5" size="lg" tag="h2">
          Partners & Ecosystem
        </Heading>
        <p className="mt-3 text-xl">Welcome to Neon Developer days from 6-8 December, 2022</p>
        <div className="relative mt-14">
          <div className="absolute top-16 left-1/2 h-auto w-[1068px] -translate-x-1/2">
            <StaticImage
              className="rounded-[200px] opacity-30 blur-[70px]"
              imgClassName="rounded-[200px]"
              src="./images/bg-gradient-partners.jpg"
              width={1068}
              height={520}
              alt=""
              loading="lazy"
              aria-hidden
            />
          </div>
          <StaticImage
            className="rounded-2xl"
            imgClassName="rounded-2xl"
            src="./images/bg-partners.jpg"
            width={940}
            height={520}
            alt=""
            loading="lazy"
            aria-hidden
          />
          <div className="absolute top-8 left-[38px] h-full max-w-[330px] rounded-2xl bg-secondary-2 px-5 pt-7 pb-8">
            <Button
              className="w-full px-8 !text-lg"
              theme="secondary"
              size="sm"
              style={{ boxShadow: '0px 10px 30px rgba(26, 26, 26, 0.6)' }}
            >
              <PlayIcon className="mr-4 h-[22px] w-4 shrink-0" />
              <span>Watch announcements</span>
            </Button>
            <ul className="mt-7">
              {items.map(({ text, linkText, linkUrl }, index) => (
                <li
                  className="flex flex-col border-t border-dashed border-black border-opacity-40 py-6 text-black last:pb-0"
                  key={index}
                >
                  <p className="text-lg font-semibold leading-snug opacity-[85%]">{text}</p>
                  <Link
                    className="mt-3.5 font-semibold leading-none"
                    theme="black"
                    size="xs"
                    to={linkUrl}
                    withArrow
                  >
                    {linkText}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Partners;
