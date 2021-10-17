const detailIniciative = require("./detailIniciative")

// @ponicode
describe("handleInputChange", () => {
    let inst

    beforeEach(() => {
        inst = new detailIniciative.default({ match: { params: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } } })
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleInputChange({ target: { name: "Jean-Philippe", value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleInputChange({ target: { name: "Michael", value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleInputChange({ target: { name: "Pierre Edouard", value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleInputChange({ target: { name: "Edmond", value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleInputChange({ target: { name: "Michael", value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleInputChange(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new detailIniciative.default({ match: { params: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } } })
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentWillMount", () => {
    let inst

    beforeEach(() => {
        inst = new detailIniciative.default({ match: { params: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } } })
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("contribute", () => {
    let inst

    beforeEach(() => {
        inst = new detailIniciative.default({ match: { params: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } } })
    })

    test("0", () => {
        let callFunction = () => {
            inst.contribute()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleSaveComment", () => {
    let inst

    beforeEach(() => {
        inst = new detailIniciative.default({ match: { params: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } } })
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleSaveComment()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Like", () => {
    let inst

    beforeEach(() => {
        inst = new detailIniciative.default({ match: { params: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } } })
    })

    test("0", () => {
        let callFunction = () => {
            inst.Like()
        }
    
        expect(callFunction).not.toThrow()
    })
})
