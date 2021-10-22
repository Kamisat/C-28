class Launcher {
	constructor(bodyA, pointB) {

		var options = {
			bodyA: bodyA,
			pointB: pointB,
			stiffness: 0.01,
			length: 10
		}
		this.pointB = pointB
		this.corda = Constraint.create(options)
		World.add(world, this.corda)



	}

	fly() {
		this.corda.bodyA = null;
	}

	attach(body) {
		this.corda.bodyA = body;
	}

	display() {

			if (this.corda.bodyA){
		push()
		strokeWeight(2);
		stroke("black")
		
	

		line(this.corda.bodyA.position.x, this.corda.bodyA.position.y, this.pointB.x, this.pointB.y)

		pop()
		}
	}



}