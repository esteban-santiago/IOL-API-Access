'use strict';

class MachineLearningService {
    constructor() {
    }
    
    getAccurateLRModel(points){}
}

class SupervisedLearning extends MachineLearningService {
    constructor() {
        super();
        if (SupervisedLearning.instance instanceof SupervisedLearning)
            return SupervisedLearning.instance;

        Object.freeze(this);
        SupervisedLearning.instance = this; //c'est une variable globale ou semi globale
    }

    getAccurateLRModel(points) {
        let osm = this.getLRModelByOrdinaryMeanSquares(points); //[m, b]
        let gd = this.getLRModelByGradientDescent(points); //[m, b]

        //console.log(`Error for osm: ${this.computeErrorForGivenPoints(points, osm[0], osm[1])}`);
        //console.log(`Error for gd: ${this.computeErrorForGivenPoints(points, gd[0], gd[1])}`);

        return this.computeErrorForGivenPoints(points, osm[0], osm[1]) <
            this.computeErrorForGivenPoints(points, gd[0], gd[1]) ?
            (x) => osm[0] * x + osm[1] : (x) => gd[0] * x + gd[1];
    }

    getLRModelByOrdinaryMeanSquares(points) {
        let xS = 0, yS = 0, xA = 0, yA = 0;
        let m = 0;
        let b = 0;

        xS = points.map((element) => element[0]).reduce((a, b) => a + b);
        yS = points.map((element) => element[1]).reduce((a, b) => a + b);
        xA = xS / points.length;
        yA = yS / points.length;

        /*
        num = points.map((element) => (element[0] - xA) * (element[1] - yA)).reduce((a,b) => a+b);
        den = points.map(element => Math.pow((element[0] - xA),2)).reduce((a,b) => a + b);
        m = num / den;
        */

        m = points.map((element) => (element[0] - xA) * (element[1] - yA)).reduce((a, b) => a + b)
            / points.map(element => Math.pow((element[0] - xA), 2)).reduce((a, b) => a + b);

        b = yA - m * xA;

        //console.log(`X=${x} ==> Y=${m*x+b}`);    
        //return function model(x) {  return m*x+b };

        //return [m, b];
        return (x) => m * x + b;
        //console.log(`OSM=${[m, b]}`);
    }


    getLRModelByGradientDescent(points) {
        let learning_rate = 0.01;
        //y = mx + b (slope formula)
        let m = 0;
        let b = 0;
        let num_iterations = 1000;
        for (let i = 0; i < num_iterations; i++) {
            let gradient_m = 0;
            let gradient_b = 0;
            for (let i = 0; i < points.length; i++) {
                let x = points[i][0];
                let y = points[i][1];
                gradient_m -= (2 / points.length) * (x * (y - ((m * x) + b)));
                gradient_b -= (2 / points.length) * (y - ((m * x) + b));
            }
            m -= (learning_rate * gradient_m);
            b -= (learning_rate * gradient_b);
        }
        //return [m, b];
        return (x) => m * x + b;
        //console.log(`GD=${[m, b]}`);
    }

    computeErrorForGivenPoints(points, m, b) {
        let totalError = 0;
        for (let i = 0; i < points.length; i++) {
            let x = points[i][0];
            let y = points[i][1];
            totalError = totalError + Math.pow((y - (m * x + b)), 2);
        }
        return totalError / points.length;
    }

}

export {
    MachineLearningService, 
    SupervisedLearning
};

/*


    static computeErrorForGivenPoints(points, m, b) {
        let totalError = 0;
        for (let i = 0; i < points.length; i++) {
            let x = points[i][0];
            let y = points[i][1];
            totalError = totalError + Math.pow((y - (m * x + b)), 2);
        }
        return totalError / points.length;
    }

    static stepGradientDescent(points, current_m, current_b, learning_rate) {
        //Gradient descent
        let gradient_m = 0;
        let gradient_b = 0;
        let N = points.length;
        for (let i = 0; i < N; i++) {
            let x = points[i][0];
            let y = points[i][1];
            gradient_m = gradient_m - (2 / N) * (x * (y - ((current_m * x) + current_b)));
            gradient_b = gradient_b - (2 / N) * (y - ((current_m * x) + current_b));
        }
        let new_b = current_b - (learning_rate * gradient_b);
        let new_m = current_m - (learning_rate * gradient_m);
        console.log(`Error is: ${this.computeErrorForGivenPoints(points, new_m, new_b)}`);
        return [new_m, new_b]
    }

    static gradientDescentRunner(points, starting_m, starting_b, num_iterations, learning_rate) {
        let m = starting_m;
        let b = starting_b;
        for (let i = 0; i < num_iterations; i++) {
            [m, b] = this.stepGradientDescent(points, m, b, learning_rate);
        }
        return [m, b];
    }

    static getGradientDescentModel(points) {
        let learning_rate = 0.02;
        let times = 1000;
        console.log(m, b, error);
    }

    static runGD() {
        let points = [[2, 5], [6, 7], [0, 4], [3, 6]];
        let learning_rate = 0.02;
        //y = mx + b (slope formula)
        let initial_m = 0;
        let initial_b = 0;
        let num_iterations = 1000;
        let [m, b] = this.gradientDescentRunner(points, initial_m, initial_b, num_iterations, learning_rate);
        console.log([m, b]);

    }

*/
