import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '../ui/Container'
import WeatherHero from './WeatherHero'
import Chart from './Chart'

const useStyles = makeStyles(theme => ({
  containerProgress: {
    margin: 60,
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  chartContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 30,
  },
  footnote: {
    fontSize: 12,
  },
  footnoteContainer: {
    marginBottom: 30,
    zIndex: 2,
  },
  link: {
    cursor: 'pointer',
    fontSize: 12,
    float: 'right',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
}))

function Weather({ img }) {
  const classes = useStyles()
  const [isLoading, setLoading] = useState(false)
  const [water, setWater] = useState('')
  const [water2, setWater2] = useState('')
  const [waterTime, setWaterTime] = useState('')
  const [waterTime2, setWaterTime2] = useState('')
  const [temp, setTemp] = useState('')
  const [level, setLevel] = useState('')
  const [levelTime, setLevelTime] = useState('')
  const [runoff, setRunoff] = useState('')
  const [runoffTime, setRunoffTime] = useState('')

  // async function fetchUrl(url) {
  //   const response = await fetch(url)
  //   const json = await response.json()
  //   setData(json)
  //   setLoading(false)
  // }

  const getWaterData = value => {
    let waterTemp = null
    let waterTime = null
    if (
      value
        .split('table')[7]
        .split('<td  class="center">')[1]
        .split('</td>')[0] !== '--'
    ) {
      waterTemp = value
        .split('table')[7]
        .split('<td  class="center">')[1]
        .split('</td>')[0]
      waterTime = value
        .split('table')[7]
        .split('<td  class="center">')[0]
        .split('<td >')[1]
        .split('</td>')[0]
    } else if (
      value
        .split('table')[7]
        .split('<td  class="center">')[2]
        .split('</td>')[0] !== '--'
    ) {
      waterTemp = value
        .split('table')[7]
        .split('<td  class="center">')[2]
        .split('</td>')[0]
      waterTime = value
        .split('table')[7]
        .split('<td  class="center">')[1]
        .split('<td >')[1]
        .split('</td>')[0]
    } else if (
      value
        .split('table')[7]
        .split('<td  class="center">')[3]
        .split('</td>')[0] !== '--'
    ) {
      waterTemp = value
        .split('table')[7]
        .split('<td  class="center">')[3]
        .split('</td>')[0]
      waterTime = value
        .split('table')[7]
        .split('<td  class="center">')[2]
        .split('<td >')[1]
        .split('</td>')[0]
    }
    return [waterTemp, waterTime]
  }

  useEffect(() => {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const urlWater =
      'https://www.gkd.bayern.de/en/rivers/watertemperature/kelheim/muenchen-himmelreichbruecke-16515005/current-values/table'
    const urlWater2 =
      'https://www.gkd.bayern.de/en/rivers/watertemperature/kelheim/muenchen-tieraerztl-hochschule-16516008/current-values/table'
    // const urlWater3 =
    //   'https://www.gkd.bayern.de/en/rivers/watertemperature/isar/muenchen-16005701/current-values/table'
    const urlLevel =
      'https://www.gkd.bayern.de/en/rivers/waterlevel/kelheim/muenchen-himmelreichbruecke-16515005/current-values/table'
    const urlRunoff =
      'https://www.gkd.bayern.de/en/rivers/discharge/kelheim/muenchen-himmelreichbruecke-16515005/current-values/table'

    const fetchData1 = () => {
      setLoading(true)
      fetch(proxyurl + urlWater)
        .then(function(response) {
          return response
        })
        .then(response => response.text())
        .then(contents => {
          let waterData = getWaterData(contents)
          setWaterTime(waterData[1]), setWater(waterData[0])
          setLoading(false)
        })
        .catch(function(e) {
          setLoading(false)
        })
    }
    fetchData1()
    const fetchData2 = () => {
      fetch(proxyurl + urlLevel)
        .then(function(response) {
          return response
        })
        .then(response => response.text())
        .then(contents => {
          setLevelTime(
            contents
              .split('table')[7]
              .split('<td  class="center">')[0]
              .split('<td >')[1]
              .split('</td>')[0]
          ),
            setLevel(
              contents
                .split('table')[7]
                .split('<td  class="center">')[1]
                .split('</td>')[0]
            )
          setLoading(false)
        })
        .catch(function(e) {
          setLoading(false)
        })
    }
    fetchData2()
    const fetchData3 = () => {
      fetch(proxyurl + urlRunoff)
        .then(function(response) {
          return response
        })
        .then(response => response.text())
        .then(contents => {
          setRunoffTime(
            contents
              .split('table')[7]
              .split('<td  class="center">')[0]
              .split('<td >')[1]
              .split('</td>')[0]
          ),
            setRunoff(
              contents
                .split('table')[7]
                .split('<td  class="center">')[1]
                .split('</td>')[0]
            )
          setLoading(false)
        })
        .catch(function(e) {
          setLoading(false)
        })
    }
    fetchData3()
    const fetchData4 = () => {
      setLoading(true)
      fetch(proxyurl + urlWater2)
        .then(function(response) {
          return response
        })
        .then(response => response.text())
        .then(contents => {
          let waterData = getWaterData(contents)
          setWaterTime2(waterData[1]), setWater2(waterData[0])
          setLoading(false)
        })
        .catch(function(e) {
          setLoading(false)
        })
    }
    fetchData4()
    // const fetchData4 = () => {
    //   setLoading(true)
    //   fetch(proxyurl + urlTemp)
    //     .then(function(response) {
    //       return response
    //     })
    //     .then(response => response.json())
    //     .then(contents => {
    //       console.log(contents)
    //       setTemp(contents), setLoading(false)
    //     })
    //     .catch(function(e) {
    //       console.log(e)
    //       setLoading(false)
    //     })
    // }
    // fetchData4()
  }, [])

  return (
    <div className={classes.root}>
      {isLoading && (
        <Container className={classes.containerProgress}>
          <CircularProgress />
        </Container>
      )}
      {!isLoading && (
        <>
          <WeatherHero img={img} />
          <Container className={classes.container}>
            <Typography variant="h1" align="center" className={classes.header}>
              Please be respectful, the Eisbach is currently closed.
            </Typography>
            <Typography variant="h1" align="center" className={classes.header}>
              Now is a great time to take care of your board!
            </Typography>
          </Container>
          <div className={classes.chartContainer}>
            <Chart
              value={water || water2}
              title="Water Temperature"
              unit="°C"
              max="22"
              min="0"
            />
            <Chart
              value={level}
              title="Water Level"
              max="155"
              min="75"
              unit="cm"
            />
            <Chart value={runoff} title="Runoff" max="30" min="0" unit="m³/s" />
          </div>
          <Container className={classes.container}>
            <Typography align="center">
              The Eisbach is the famous river surfing spot in Munich which can
              be surfed year around. The German name <em>Eisbach</em> (which can
              be translated to <em>ice creek</em>) acts as a synonym for the
              water temperature that is often ice cold. The water originates in
              the Bavarian Alps and slowly heats up during the summer months on
              its way to Munich. This page will give you a quick overview of the
              current river conditions. Pack the right wetsuit and enjoy your
              surf session!
            </Typography>
          </Container>
        </>
      )}
      {!isLoading && (
        <Container className={classes.footnoteContainer}>
          <Typography className={classes.footnote} align="right">
            Taken at: {runoffTime}
          </Typography>
          <a
            className={classes.link}
            href="https://www.gkd.bayern.de/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            source
          </a>
        </Container>
      )}
    </div>
  )
}

export default Weather
