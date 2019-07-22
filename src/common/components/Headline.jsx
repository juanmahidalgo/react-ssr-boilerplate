import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Collapse,
  Typography,
  Tooltip,
} from '@material-ui/core';
import { FacebookSelector, FacebookCounter } from 'react-reactions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  card: {
    width: '50%',
    margin: '25px auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  counter: {
    marginTop: '0.5rem',
  },
}));

const Headline = ({ headline }) => {
  const classes = useStyles();
  const [reactions, setReactions] = useState([
    {
      by: 'Mark Zuckerberg',
      emoji: 'like',
    },
    {
      by: 'Jeff Bezos',
      emoji: 'love',
    },
    {
      by: 'Testing User',
      emoji: 'love',
    }
  ]);
  const [reaction, setReaction] = useState('');
  const [expanded, setExpanded] = useState(false);

  const onSelect = (emoji) => {
    setReactions([...reactions, { by: 'You', emoji }]);
    setReaction(emoji);
  }
  
  const removeReaction = () => {
    setReactions(reactions.filter(reaction => reaction.by !== 'You'));
    setReaction('');
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      { headline.urlToImage && <CardMedia
        className={classes.media}
        image={headline.urlToImage}
        title="News image"
      />}
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {headline.source.name} - {new Date(headline.publishedAt).toDateString()}
        </Typography>
        <Typography variant="h5" component="h2">
          <a target="_blank" rel="noopener noreferrer" href={headline.url}>
            {headline.title}
          </a>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {headline.description}
        </Typography>
      </CardContent>
      <CardActions>
        <div>
          {!reaction &&
            <FacebookSelector onSelect={onSelect} />
          }
          <div className={classes.counter}>
            <FacebookCounter
              counters={reactions}
              important={['Mark Zuckerberg', 'Jeff Bezos']}
              onClick={removeReaction}
              user="You"
            />
          </div>
        </div>
        <Tooltip title="Read More" aria-label="Read More">
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {headline.content}
        </CardContent>
      </Collapse>
    </Card>
  );
};

Headline.propTypes = {
  headline: PropTypes.shape({
    url: PropTypes.string,
    urlToImage: PropTypes.string,
    content: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    publishedAt: PropTypes.string,
    source: PropTypes.shape({
      name: PropTypes.string,
    }),
  })
}

export default Headline;
