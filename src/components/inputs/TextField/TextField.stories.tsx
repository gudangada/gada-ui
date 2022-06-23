import * as React from "react";
import { Meta } from "@storybook/react";
import TextFieldUI from "./TextField";
import { Col } from "../../core";
import { EditIcon, PlusIcon } from "../../../assets";
import { iTextFieldProps } from "./types";
import { TextFieldRegExp } from "./constants";

export default {
  title: "Components/Input",
  component: TextFieldUI,
  args: {
    value: "16000",
  },
} as Meta<iTextFieldProps>;

export const TextField: React.VFC<iTextFieldProps> = (props) => {
  const [values, setValues] = React.useState<any[]>([
    ,
    ,
    ,
    ,
    ,
    props.value,
    ,
    `    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Morbi tristique senectus et netus et malesuada fames ac. Adipiscing elit ut aliquam purus sit. Non odio euismod lacinia at quis risus sed. Ullamcorper velit sed ullamcorper morbi. Convallis tellus id interdum velit laoreet. Sapien faucibus et molestie ac. Lorem ipsum dolor sit amet. Porttitor leo a diam sollicitudin tempor id. Enim nec dui nunc mattis enim ut. Eros in cursus turpis massa tincidunt dui ut ornare. Feugiat nisl pretium fusce id velit ut tortor pretium viverra.

    Lobortis mattis aliquam faucibus purus in. At erat pellentesque adipiscing commodo. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Odio ut sem nulla pharetra diam sit. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Sapien eget mi proin sed libero enim sed faucibus turpis. Id diam maecenas ultricies mi. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Gravida arcu ac tortor dignissim convallis aenean et tortor.
    
    Arcu felis bibendum ut tristique. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Sodales ut etiam sit amet. Eget magna fermentum iaculis eu. Faucibus in ornare quam viverra orci sagittis eu. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Mauris sit amet massa vitae tortor condimentum. Non tellus orci ac auctor augue mauris augue neque. Tortor posuere ac ut consequat semper viverra nam libero justo. Et malesuada fames ac turpis egestas maecenas. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Malesuada proin libero nunc consequat interdum. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Nibh mauris cursus mattis molestie. Fermentum odio eu feugiat pretium. Fringilla ut morbi tincidunt augue. In hac habitasse platea dictumst.
    
    Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Arcu non sodales neque sodales ut. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. In hendrerit gravida rutrum quisque non tellus. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Purus faucibus ornare suspendisse sed nisi lacus sed. Tempus iaculis urna id volutpat lacus laoreet. Mollis aliquam ut porttitor leo a diam sollicitudin. Egestas congue quisque egestas diam in arcu. Morbi tristique senectus et netus. Vitae tempus quam pellentesque nec. Fringilla urna porttitor rhoncus dolor purus non enim. Non blandit massa enim nec dui nunc mattis enim ut. Eget dolor morbi non arcu risus quis varius. Mauris pellentesque pulvinar pellentesque habitant morbi. Sem nulla pharetra diam sit amet nisl suscipit. Diam vulputate ut pharetra sit amet aliquam.
    
    Ut lectus arcu bibendum at. Lectus arcu bibendum at varius. Amet luctus venenatis lectus magna fringilla urna. Maecenas ultricies mi eget mauris pharetra. Faucibus scelerisque eleifend donec pretium vulputate sapien. Aliquam faucibus purus in massa tempor nec. Nisl tincidunt eget nullam non nisi est sit amet. Ullamcorper a lacus vestibulum sed arcu non. In aliquam sem fringilla ut morbi tincidunt augue. Dui id ornare arcu odio. Id donec ultrices tincidunt arcu non sodales. Ac odio tempor orci dapibus ultrices in. Donec pretium vulputate sapien nec sagittis aliquam. Vitae ultricies leo integer malesuada nunc. Facilisis gravida neque convallis a cras semper auctor neque. Vitae justo eget magna fermentum iaculis. Platea dictumst quisque sagittis purus sit amet. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.`,
  ]);

  const handleChange =
    (index: number) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((curVals) => {
        const newValues = [...curVals];
        newValues[index] = event.target.value;
        return newValues;
      });
    };

  return (
    <Col spacing={16}>
      <TextFieldUI
        id="example-text-field"
        name="Example TextField"
        value={values[0]}
        label="Label"
        StartIcon={EditIcon}
        labelInline
        onChange={handleChange(0)}
      />
      <TextFieldUI
        id="example-text-field"
        name="Example TextField"
        value={values[1]}
        label="Label"
        StartIcon={EditIcon}
        errorText="Helper text"
        ErrorTextIcon={PlusIcon}
        onChange={handleChange(1)}
        filterRegExps={[TextFieldRegExp.allowCommaOnly]}
      />
      <TextFieldUI
        id="example-text-field"
        name="Example TextField"
        value={values[2]}
        label="Label"
        EndIcon={EditIcon}
        onChange={handleChange(2)}
      />
      <TextFieldUI
        id="example-text-field"
        name="Example TextField"
        value={values[3]}
        label="Label"
        errorText="Helper text"
        onChange={handleChange(3)}
      />
      <TextFieldUI
        id="example-text-field"
        name="Example TextField"
        value="Disabled"
        label="Label"
        errorText="Helper Text"
        disabled
        onChange={handleChange(4)}
      />
      <TextFieldUI
        id="example-number-field"
        name="Example Number Field"
        value={values[5]}
        label="Number Field"
        onChange={handleChange(5)}
        type="number"
      />
      <TextFieldUI
        id="example-number-field"
        name="Example Number Field with Decimal"
        value={values[6]}
        label="Number Field (Decimal)"
        onChange={handleChange(6)}
        type="number"
        allowDecimal
      />
      <TextFieldUI
        id="example-textarea-field"
        name="Example Text Area"
        value={values[7]}
        label="Text area"
        onChange={handleChange(7)}
        type="textarea"
      />
    </Col>
  );
};
