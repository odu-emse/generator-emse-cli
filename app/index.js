'use strict'
const Generator = require('yeoman-generator')
const yosay = require('yosay')
const chalk = require('chalk')

const course = 58
const projectName = 'EMSE CLI Bundler'

module.exports = class extends Generator {
    prompting() {
        // Have Yeoman greet the user.
        this.log(
            yosay(`Welcome to the breathtaking ${chalk.red(projectName)}!`)
        )

        let moduleLoop = enma715 => {
            let choice = []
            for (let i = 0; i <= enma715; i++) {
                choice.push({
                    name: `Module 0${i}`,
                    value: `include-0${i}`,
                    checked: false,
                })
            }
            console.log(choice)

            return choice
        }

        const prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the student',
            },
            {
                type: 'checkbox',
                name: 'modules',
                message: 'Which modules would you like to include in ENMA 715?',
                choices: moduleLoop(course),
            },
        ]

        return this.prompt(prompts).then(props => {
            // To access props later use this.props.someAnswer;
            this.props = props
        })
    }

    writing() {
        this.fs.copy(
            this.templatePath('dummyfile.txt'),
            this.destinationPath('./build/dummyfile.txt')
        )
    }

    install() {
        this.installDependencies()
    }
}
