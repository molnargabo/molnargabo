import Header from "./components/header/header";
import Link from "./components/link/link";
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <>
      <Helmet>
        <title>MolnarGabor - Kaszinó bónuszok</title>‍
        <meta name="description" content="Legjobb kaszinó oldalak, befizetési bónuszok mind kriptovalutával és kártyás befizetéssel! Ha egy kis kikapcsolódásra vágysz itt találsz rá megfelelő kaszinót!" />
        <meta name="keywords" content="kaszinó, bónusz, befizetés, kaszinóbónusz, rulett, slot, nyerőgép" />
        <meta property="og:site_name" content="MolnarGabor - Kaszinó bónuszok" />
        <meta property="og:locale" content="hu_HU" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Legjobb kaszinó oldalak, befizetési bónuszok mind kriptovalutával és kártyás befizetéssel! Ha egy kis kikapcsolódásra vágysz itt találsz rá megfelelő kaszinót!" />
        <meta property="og:url" content="https://molnargabo.com" />
        <meta property="og:image" content="https://cdn.fifa.gg/cache/media/player/448e853d-0106-4e93-a27d-92563d1d5092/Image-of-player-molnargabo-player-448e853d-0106-4e93-a27d-92563d1d5092.jpg" />
      </Helmet>
      <Header />
      <Link />
    </>
  );
};

export default App;