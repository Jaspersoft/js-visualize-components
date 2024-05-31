import InputControls from "input-controls-plugin"

describe("InputControls plugin", () => {

    it("should allow instantiation", () => {
        let ic = new InputControls({});
        expect(ic).toBeDefined();
        expect(ic.getControls()).toEqual({});
        expect(ic.config.username).toBe('joeuser');
    });

})