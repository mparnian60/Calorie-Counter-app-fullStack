import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { ListGroup, ListGroupItem } from 'reactstrap';
import DayPlanModal from './DayPlanModal';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

const DrawFoodResultToDom = (props) => {
    const classes = useStyles();

    const [showModal, setShowModal] = useState(false);

    const handleClick = () =>{
        setShowModal(true);
        //redirect to FoodDiary route
       
        console.log('link clicked');
        
    }

        return (
            <div key={props.foodDetails.food_id}>
                <ListGroup>
                    <ListGroupItem tag="a" href="#" onClick={handleClick}>{props.foodDetails.food_name}</ListGroupItem>
                    <ListGroupItem>{props.foodDetails.food_description}</ListGroupItem>
                </ListGroup>
                <DayPlanModal foodDetails={props.foodDetails} showModal={showModal} setShowModal={setShowModal}/>
            </div>
        //     <div className={classes.root}>
        //     <List component="nav" aria-label="main mailbox folders">
        //       <ListItem button>
        //         <ListItemIcon>
        //           <InboxIcon />
        //         </ListItemIcon>
        //         <ListItemText primary={props.foodDetails.food_name} />
        //       </ListItem>
        //       <ListItem button>
        //         <ListItemIcon>
        //           <DraftsIcon />
        //         </ListItemIcon>
        //         <ListItemText primary="Drafts" />
        //       </ListItem>
        //     </List>
        //     <Divider />
        //     <List component="nav" aria-label="secondary mailbox folders">
        //       <ListItem button>
        //         <ListItemText primary="Trash" />
        //       </ListItem>
        //       <ListItemLink href="#simple-list">
        //         <ListItemText primary="Spam" />
        //       </ListItemLink>
        //     </List>
        //   </div>
        );
    };

export default DrawFoodResultToDom;
