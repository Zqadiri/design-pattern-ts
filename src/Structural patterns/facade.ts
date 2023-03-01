class CarEngine {
    static DEFAULT_COOLING_TEMP: number = 90;
    static MAX_ALLOWED_TEMP: number = 50;

    public fuelInjector(action : string) : void {
        console.log(`fuelInjector${action}`);
    }
    public airFlowController(action : string) : void {
        console.log(`airFlowController Take Air${action}`);
    }
    public starter() : void {
        console.log("Start");
    }
    public coolingController(DEFAULT_COOLING_TEMP: number) : void {
        console.log(`Cooling Controller ${DEFAULT_COOLING_TEMP}`);
    }
    public catalyticConverter(action : string) {
        console.log(`catalyticConverter on ${ action}`);
    }
}

class CarEngineFacade {
    protected carengine: CarEngine;

    public  StartCar (): void{
        this.carengine.fuelInjector("on");
        this.carengine.airFlowController('on');
        this.carengine.starter();
        this.carengine.coolingController(CarEngine.DEFAULT_COOLING_TEMP);
        this.carengine.catalyticConverter('on');
    }

    public turnOff (): void {
        this.carengine.fuelInjector("off");
        this.carengine.catalyticConverter("off");
        this.carengine.airFlowController('off');
        this.carengine.coolingController(CarEngine.DEFAULT_COOLING_TEMP);
    }
}