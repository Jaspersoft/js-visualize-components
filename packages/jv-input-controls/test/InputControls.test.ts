import InputControls from "@jaspersoft/jv-input-controls"

describe("InputControls plugin", () => {

    it("should allow instantiation, and do so with default config settings", () => {
        let ic = new InputControls({});
        expect(ic).toBeDefined();
        expect(ic.getControls()).toEqual({});
        expect(ic.config.username).toBe('joeuser');
    });

    it("should configure when given configuration", () => {
        let ic = new InputControls({}, {username: 'bobuser', password: 'bobuser', tenant: 'org'});
        expect(ic.config.username).toBe('bobuser');
    });

});
