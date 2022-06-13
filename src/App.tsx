import React, { useState } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  MenuItem,
  Select,
  SelectChangeEvent,
  Button,
  Grid,
} from "@mui/material";
import { fetchInput } from "./state/results/actionCreators";
import { useDispatch, useSelector } from "./utils/react-redux";
import { SearchEngines } from "./services/searchServices";
import SearchItemList from "./components/SearchItemList";
import "./App.css";

const tempData = [
  {
    title:
      "Soccer - Peru rebuilt by the man who destroyed them 32 years ago ...",
    url: "https://www.reuters.com/article/soccer-worldcup-pot2-peru-idUKKBN1DT2P6",
    description:
      "Nov 29, 2017 ... Thirty-two years ago, Argentina's Ricardo Gareca scored a goal that cruelly denied Peru a place at the 1986 World Cup.",
    searchEngine: SearchEngines.GOOGLE,
  },
  {
    title: "Ricardo Gareca: el 'Tigre' se quiebra al pensar en una segunda ...",
    url: "https://elpopular.pe/deportes/2022/06/12/ricardo-gareca-tigre-se-quiebra-pensar-segunda-clasificacion-seleccion-peruana-mundial-qatar-2022-copa-mundo-repechaje-peru-vs-australia-foto-133140",
    description:
      "Un duelo decisivo que definirá si clasificamos por segunda vez a un Mundial, gracias a los jugadores de la 'Bicolor' y el mismo, Ricardo Gareca, quien en la conferencia de prensa se emocionó sobre...",
    searchEngine: SearchEngines.BING,
  },
  {
    title:
      'Ricardo Gareca: "Perú tiene jugadores que se mantienen a través de ...',
    url: "https://larazon.pe/ricardo-gareca-peru-tiene-jugadores-que-se-mantienen-a-traves-de-los-anos/",
    description:
      "Ricardo Gareca, director técnico de la Selección Peruana de Fútbol, expresó sus últimas declaraciones esta mañana en el Estadio Ahmad Bin Ali. En ese sentido, el entrenador argentino señaló que existen diversas similitudes entre Australia y Perú y destacó el porte físico de los ‘canguros’ para sostener un cotejo.",
    searchEngine: SearchEngines.BING,
  },
  {
    title:
      "Ricardo Gareca y sus 5 mejores frases a un día del Perú vs. Australia",
    url: "https://libero.pe/futbol-peruano/seleccion-peruana/2022/06/12/ricardo-gareca-sus-5-mejores-frases-dia-peru-vs-australia-mundial-qatar-2022-repechaje-2022-62731",
    description:
      "Ricardo Gareca y sus 5 mejores frases a un día del Perú vs. Australia El 'Tigre' Gareca declaró previo al Perú vs Australia, brindó tranquilidad pero no dejó de mostrar su ilusión por una eventual...",
    searchEngine: SearchEngines.BING,
  },
  {
    title:
      "Ricardo Gareca sigue fino con el balón y no pierde su olfato goleador ...",
    url: "https://www.infobae.com/america/peru/2022/06/11/ricardo-gareca-sigue-fino-con-el-balon-y-no-pierde-su-olfato-goleador-el-peculiar-gol-en-practica-previa-al-peru-vs-australia/",
    description:
      "Ricardo Gareca anotó un golazo en prácticas de la bicolor. (Video: Latina) GARECA, EL DELANTERO LETAL Ricardo Gareca fue un letal delantero argentino que fue reconocido en el fútbol de su país, en...",
    searchEngine: SearchEngines.BING,
  },
  {
    title: "Ricardo Gareca Thanks 'Incredible' Peru Fans & Promises Strong ...",
    url: "https://www.si.com/soccer/2018/06/22/ricardo-gareca-thanks-incredible-peru-fans-promises-strong-finish-despite-elimination",
    description:
      "Jun 22, 2018 ... Peru manager Ricardo Gareca has outlined his side's determination to do their fans proud in their final group game, despite being eliminated ...",
    searchEngine: SearchEngines.GOOGLE,
  },
  {
    title:
      "Ricardo Gareca Nardi (@garecaoficial) • Instagram photos and videos",
    url: "https://www.instagram.com/garecaoficial/",
    description:
      "34.6k Followers, 2 Following, 32 Posts - See Instagram photos and videos from Ricardo Gareca Nardi (@garecaoficial)",
    searchEngine: SearchEngines.GOOGLE,
  },
  {
    title: "Ricardo Gareca - Yahoo Search Results",
    url: "https://m.search.yahoo.com/v1/en-US/w/sapp?ei=UTF-8&p=Ricardo+Gareca&fr2=p%3As%2Cv%3Asfp%2Cm%3Ancp&fr=yhs-Elex-elex_22find",
    description:
      'Ricardo Alberto Gareca Nardi ( Spanish pronunciation: [riˈkaɾðo alˈβeɾto ɣaˈɾeka ˈnaɾði]; born 10 February 1958), nicknamed el Tigre and el Flaco ("Tiger" and "Slim"), is an Argentine football manager and former player. He is the current manager of the Peru national team .',
    searchEngine: SearchEngines.BING,
  },
  {
    title: "Ricardo Gareca - Wikipedia, la enciclopedia libre",
    url: "https://es.wikipedia.org/wiki/Ricardo_Gareca",
    description:
      "Ricardo Alberto Gareca Nardi es un exfutbolista, entrenador y profesor argentino que se desempeñó como delantero. Actualmente es el entrenador de la selección peruana de fútbol, con la que ha llegado a cuatro instancias finales desde que asumió el cargo en 2015: Medalla de bronce en la Copa América 2015, cuartos de final en la Copa América Centenario, la clasificación a la Copa Mundial de 2018 después de 36 años de ausencia, medalla del subcampeonato en Brasil 2019 y el ...",
    searchEngine: SearchEngines.BING,
  },
  {
    title: "Ricardo Gareca - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Ricardo_Gareca",
    description:
      'Ricardo Alberto Gareca Nardi (Spanish pronunciation: [riˈkaɾðo alˈβeɾto ɣaˈɾeka ˈnaɾði]; born 10 February 1958), nicknamed el Tigre and el Flaco ("Tiger" and "Slim"), is an Argentine football manager and former player. He is the current manager of the Peru national team.. During his playing career, Gareca played for four of the most important teams in Argentina (Boca Juniors, River ...',
    searchEngine: SearchEngines.BING,
  },
  {
    title: "Ricardo Gareca - Wikipedia",
    url: "https://wikipedia.com/wiki/Ricardo_Gareca",
    description:
      'Ricardo Alberto Gareca Nardi nicknamed el Tigre and el Flaco ("Tiger" and "Slim"), is an Argentine football manager and former player.',
    searchEngine: SearchEngines.GOOGLE,
  },
  {
    title: "Ricardo Gareca - Manager profile | Transfermarkt",
    url: "https://www.transfermarkt.com/ricardo-gareca/profil/trainer/7628",
    description:
      "Full Name: Ricardo Alberto Gareca Nardi. Date of Birth: Feb 10, 1958. Place of Birth: Tapiales Argentina. Age: 64. Citizenship: Argentina",
    searchEngine: SearchEngines.GOOGLE,
  },
  {
    title: "Perú vs. Australia: Ricardo Gareca elogió a rival y pidió ...",
    url: "https://rpp.pe/futbol/seleccion-peruana/peru-vs-australia-ricardo-gareca-elogio-a-rival-y-pidio-concentracion-a-sus-jugadores-en-repechaje-noticia-1411262",
    description:
      "Ricardo Gareca analizó al rival de Perú en el repechaje. Este domingo en conferencia de prensa dio detalles de Australia, que consiguió su pase a esta instancia al vencer 2-1 a Emiratos Árabes...",
    searchEngine: SearchEngines.BING,
  },
  {
    title:
      "Perú vs. Australia | Así le fue a Ricardo Gareca ante selecciones no ...",
    url: "https://larepublica.pe/deportes/mundial-qatar-2022/2022/06/12/peru-vs-australia-asi-le-fue-a-ricardo-gareca-ante-selecciones-no-americanas-repechaje-qatar-2022/",
    description:
      "La Blanquirroja busca llegar a su sexta Copa del Mundo y uno de los registros que más ilusión despierta en los hinchas es el historial del entrenador Ricardo Gareca ante rivales no americanos....",
    searchEngine: SearchEngines.BING,
  },
  {
    title:
      "Peruvian national team: Ricardo Gareca would be an option to lead ...",
    url: "https://www.infobae.com/en/2022/04/04/peruvian-national-team-ricardo-gareca-would-be-an-option-to-lead-colombia-according-to-argentine-journalist/",
    description:
      "Apr 4, 2022 ... It is not a secret to anyone that Ricardo Gareca is the architect of the success of the Peruvian national team. What it has been achieving ...",
    searchEngine: SearchEngines.GOOGLE,
  },
  {
    title: "Peru remain in World Cup contention thanks to Ricardo Gareca's ...",
    url: "https://www.espn.com/soccer/peru-per/story/4628321/peru-remain-in-world-cup-contention-thanks-to-ricardo-garecas-excellence",
    description:
      "Mar 29, 2022 ... The achievement of Argentine coach Ricardo Gareca is nothing short of remarkable. In the 2010 and 2014 qualifiers -- the two campaigns ...",
    searchEngine: SearchEngines.GOOGLE,
  },
  {
    title: "Peru manager Ricardo Gareca, the forgotten hero of 1986 World ...",
    url: "https://golazoargentino.com/2016/10/06/peru-manager-ricardo-gareca-the-forgotten-hero-of-1986-world-cup-win/",
    description:
      "Oct 6, 2016 ... Peru manager Ricardo Gareca, the forgotten hero of 1986 World Cup win · 1986soccerman · More videos · More videos on YouTube.",
    searchEngine: SearchEngines.GOOGLE,
  },
  {
    title: "Palmeiras fires Argentine coach Ricardo Gareca",
    url: "https://www.usatoday.com/story/sports/soccer/2014/09/01/palmeiras-fires-argentine-coach-ricardo-gareca/14933617/",
    description:
      "Sep 1, 2014 ... SAO PAULO (AP) — Brazilian club Palmeiras has fired Ricardo Gareca just three months after taking a chance on the Argentine coach.",
    searchEngine: SearchEngines.GOOGLE,
  },
  {
    title: "Carlos Zambrano red rocked Peru - coach Ricardo Gareca | Goal.com",
    url: "https://www.goal.com/en-us/news/587/copa-america/2015/06/30/13172902/ricardo-gareca-zambrano-red-a-learning-experience",
    description:
      "Jun 30, 2015 ... Peru coach Ricardo Gareca has pointed to Carlos Zambrano's controversial red card as the turning point in his side's 2-1 defeat to Chile.",
    searchEngine: SearchEngines.GOOGLE,
  },
];

function App() {
  const dispatch = useDispatch();
  const resultState = useSelector((state) => state.results);

  const [inputSearch, setInputSearch] = useState<string>("");

  const [browserEngines, setBrowserEngines] = useState<string>("");
  const handleChange = (value: SelectChangeEvent<string>) => {
    setBrowserEngines(value.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value);
  };

  const handleSubmit = () => {
    const browserEnginesDecoded = browserEngines.split(
      ","
    ) as Array<SearchEngines>;
    dispatch(fetchInput(inputSearch, browserEnginesDecoded));
  };

  return (
    <div className="pageContent">
      <FormGroup row className="formGroup">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={4}>
            <Input onChange={handleInputChange} placeholder="Search..." />
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={{ m: 1, minWidth: 220 }}>
              <InputLabel id="select-browser-engine">Browser</InputLabel>
              <Select
                labelId="select-browser-engine"
                id="select-browser-engine"
                value={browserEngines}
                label="Browser"
                onChange={handleChange}
              >
                <MenuItem value={SearchEngines.GOOGLE}>Google</MenuItem>
                <MenuItem value={SearchEngines.BING}>Bing</MenuItem>
                <MenuItem
                  value={`${SearchEngines.GOOGLE},${SearchEngines.BING}`}
                >
                  Google and Bing
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={handleSubmit}>
              Search
            </Button>
          </Grid>
        </Grid>
      </FormGroup>
      <SearchItemList
        error={resultState.error}
        loading={resultState.loading}
        results={tempData}
      />
    </div>
  );
}

export default App;
