import 'numl';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import FormField from './components/FormField';
import NumlProvider from './components/NumlProvider';
import { assertions } from './Helpers/assertions';

function App() {

	var dynamicFormArray = [
		{
			name: "fname",
			label: "First Name",
			assertion: "alphanumeric",
			message: "All characters must be Alphanumeric",
		},
		{
			name: "lname",
			label: "Last Name",
			assertion: "alphabets",
			message: "All characters must be Alphabets",
		},
		{
			name: "username",
			label: "User Name",
			assertion: "specialcharacters",
			message: "All characters must not contain special characters",
		},
		{
			name: "email",
			label: "Email Address",
			assertion: "alphabets",
			message: "All characters must be Alphabets",
		},
		{
			name: "age",
			label: "Age",
			assertion: "number",
			message: "All characters must be numeric",
		},
		{
			name: "blogurl",
			label: "Website / Blog URL",
			assertion: "url",
			message: "String must be HTTP/FTP URI",
		},
		{
			name: "required",
			label: "Required",
			assertion: "required",
			message: "This field is required",
		},
	]
	return (
		<NumlProvider>
			<Form gap="3x">
				{dynamicFormArray.map((eachFormItem) => {
					return (<FormField
						name={eachFormItem.name}
						assert={(assertions[eachFormItem.assertion]) || eachFormItem.assertion}
						message={eachFormItem.message}>
						{eachFormItem.label}
					</FormField>)
				})}
				<Button type="submit">Submit</Button>
			</Form>
		</NumlProvider>
	);
}

export default App;
