import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const styles = {
  sec: {
    marginLeft: '70%',
}
};

class CheckboxLabels extends React.Component {
  state = {
    checkedA: false,
    checkedB: false,
    checkedF: false,
    checkedG: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <FormGroup row className={classes.sec}>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedA}
              onChange={this.handleChange("checkedA")}
              value="checkedA"
              color="primary"
            />
          }
          label="Ativo"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedB}
              onChange={this.handleChange("checkedB")}
              value="checkedB"
              color="primary"
            />
          }
          label="Inativo"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedC}
              onChange={this.handleChange("checkedC")}
              value="checkedC"
              color="primary"
            />
          }
          label="1"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedD}
              onChange={this.handleChange("checkedD")}
              value="checkedD"
              color="primary"
            />
          }
          label="2"
        />
      </FormGroup>
    );
  }
}

CheckboxLabels.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckboxLabels);
