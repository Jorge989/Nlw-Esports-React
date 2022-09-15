interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}
export function GameBanner(props: GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.bannerUrl} alt="game1"></img>
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">
          {props.title} anúncios(s)
        </strong>
        <span className="text-zinc-300 text-sm block mt-1">
          4 {props.adsCount}
        </span>
      </div>
    </a>
  );
}
