import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'なぜするのか',
    description: (
      <>
        2024年の東京都知事選ではゴシップ的な情報が多く、公約と行動・実績に絞って情報を整理した場所が無いので作りました。一人でも多くの都民にとって有益になればと思っています。
      </>
    ),
  },
  {
    title: 'なにをするのか',
    description: (
      <>
        このwebサイトは2024年の東京都知事選に出馬する各候補者の公約とそれに対応する行動・実績、そして支援団体について調査します。発言は一切取り扱いません。支援団体の定義は、特定候補者へ金銭もしくは労力の提供を行う組織・団体とします。
      </>
    ),
  },
  {
    title: '情報募集中',
    description: (
      <>
        私一人では追いきれない情報もあると思います
        情報の提供を<a href="https://github.com/KingYoSun/tochijisen2024-search" target="_blank" rel="noopener noreferrer">GitHub</a>で受け付けています。アカウントを作成して、Issuesから投稿できます。プルリクエストも受け付けています。
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
