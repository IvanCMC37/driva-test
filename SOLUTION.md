# Design choice explanations

# Frontend

* Validation: All inputs have to go through validation in order to move between steps as well as submitting. Validator package was been used in this project hence it can save time to write a lot of edge cases, such as mobile number and email address.
* Error will be thrown if any of the input fields failed the validation check.
* Data: useState hook was used for this project, and all data will be store as an object and then pass to backend api.
* API call: Axios was used here, pretty stand choice.

# Backend

* Sequelize was used in this project, since it can provide data modeling as well as mysql query functionalities and more.
* Incoming data will be going through validation check as well, that is another benefit from using sequelize.
* Error will be throw if data fails the validation check.
* Both GET and POST api calls were implemented in this project and fully functional.

# Database
* Given template was used and data table will be create if not exist by sequelize.