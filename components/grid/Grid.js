import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridStyles from '../../styles/GridStyles'
import { Grid, Card, CardHeader } from '@material-ui/core/'

const useStyles = makeStyles(() => GridStyles)

const CardGrid = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction='row'
        justifyContent='flex-start'
        alignItems='flex-start'
      >
        {props.cardData.map(elem => (
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            xl={4}
            key={props.cardData.indexOf(elem)}
          >
            <Card className={classes.containerCard}>
              <Card className={classes.topCard}>
                <CardHeader className={classes.topCardText} title={elem.name} />
              </Card>
              <Card className={classes.middleCard}>
                <CardHeader
                  className={classes.middleCardText}
                  title={`Company Name:\n${elem.company.name}`}
                />
                <CardHeader
                  className={classes.middleCardText}
                  title={`Company Catchphrase:\n${elem.company.catchPhrase}`}
                />
                <CardHeader
                  className={classes.middleCardText}
                  title={`Company Bs:\n${elem.company.bs}`}
                />
              </Card>
              <Card className={classes.bottomCard}>
                <CardHeader
                  className={classes.bottomCardText}
                  title={`Phone: ${elem.phone}`}
                />
                <CardHeader
                  className={classes.bottomCardText}
                  title={`Email: ${elem.email}`}
                />
                <CardHeader
                  className={classes.bottomCardText}
                  title={`Website: ${elem.website}`}
                />
              </Card>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CardGrid
