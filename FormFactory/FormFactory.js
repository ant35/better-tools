const React = require('react');
const create = React.createElement;
const memo = React.memo;
const Fragment = React.Fragment;
const PropTypes = require('prop-types');
const reactstrap = require('reactstrap');
const { 
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText
} = reactstrap;

const Page = memo(function Page (props) {
	return create('div', {className: 'form-group col-sm-' + props.size},
		create(Form, {size: 'sm'}, props.children));
});

Page.propTypes = {
	size: PropTypes.number
};

Page.defaultProps = {
	size: 3
};

const Section = memo(function Section (props) {
	return create(FormGroup, null, props.children);
});

const InputField = memo(function InputField ({label, type, name, id, attribs}) {
	return create(Fragment, null, 
		[
			create(Label, {key: 0, for: id}, attribs.label), 
			create(Input, Object.assign({key: 1, type: type, name: name, id: id}, attribs), null)
		]);
});

InputField.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string 
};

InputField.defaultProps = {
	attribs: {}
};

const Name = memo(function Name({type, attribs}) {
	return create(InputField, Object.assign({type: 'text', name: type + 'Name'}, attribs), null);
});

Name.propTypes = {
	type: PropTypes.oneOf(['first', 'middle', 'last']),
	attribs: PropTypes.object
};

Name.defaultProps = {
	nameType: 'first',
	attribs: {}
};

const FirstName = memo(function FirstName(props) {
	return create(Name,Object.assign({type: 'first'}, props), null);
});

FirstName.propTypes = {
	label: PropTypes.string
};

FirstName.defaultProps = {
	label: 'First Name'
};

const MiddleName = memo(function MiddleName(props) {
	return create(Name,Object.assign({type: 'middle'}, props), null);
});

MiddleName.propTypes = {
	label: PropTypes.string
};

MiddleName.defaultProps = {
	label: 'Middle Name'
};

const LastName = memo(function LastName(props) {
	return create(Name,Object.assign({type: 'last'}, props), null);
});

LastName.propTypes = {
	label: PropTypes.string
};

LastName.defaultProps = {
	label: 'Last Name'
};

const Email = memo(function Email (props) {
	return create(InputField, {type: 'email', name: 'email', id: 'email', attribs: props}, null);
});

Email.propTypes = {
	label: PropTypes.string,
};

Email.defaultProps = {
	label: 'Email'
};

const Username = memo(function Username (props) {
	return create(InputField, {type: 'username', name: 'username', id: 'username', attribs: props}, null);
});

Username.propTypes = {
	label: PropTypes.string,
};

Username.defaultProps = {
	label: 'Username'
};

const Password = memo(function Password (props) {
	return create(InputField, {type: 'password', name: 'password', id: 'password', attribs: props}, null);
});

Password.propTypes = {
	label: PropTypes.string,
};

Password.defaultProps = {
	label: 'Password'
};

const Textarea = memo(function Textarea (props) {
	return create(InputField, {type: 'textarea', name: 'textarea', id: 'textarea', attribs: props}, null);
});

Textarea.propTypes = {
	label: PropTypes.string,
};

Textarea.defaultProps = {
	label: 'Text Area'
};

const File = memo(function File(props) {
	return create(InputField, {type: 'file', name: 'file', id: 'file', attribs: props}, null);
});

File.propTypes = {
	label: PropTypes.string,
};

File.defaultProps = {
	label: 'File'
};

const Paragraph = memo(function File({children}) {
	return create(FormText, {color: 'muted'}, children);
});

const RadioButton = memo(function RadioButton(props) {
	return create(InputField, {type: 'radio', name: 'radio', id: 'radio', attribs: props}, null);
});

const Checkbox = memo(function Checkbox(props) {
	return create(InputField, {type: 'checkbox', name: 'checkbox', id: 'checkbox', attribs: props}, null);
});

exports.Page = Page;
exports.Section = Section;
exports.FirstName = FirstName;
exports.MiddleName = MiddleName;
exports.LastName = LastName;
exports.Email = Email;
exports.Username = Username;
exports.Password = Password;
exports.Text = Text;
exports.Button = Button;
exports.Checkbox = Checkbox;
exports.Paragraph = Paragraph;
exports.RadioButton = RadioButton;