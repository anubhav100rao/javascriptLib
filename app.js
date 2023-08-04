class ExternalPaymentServiceAdapter {
    

    constructor(externalPaymentService) {
        // Use console.log() for debugging
        this.charges = externalPaymentService
    }


    createCharge({ customerId, amount, currency }) {
        this.charges.chargeCurrency = currency;
        return this.charges.createCharge(customerId, amount);
    }

    cancelCharge({ chargeId }) {
        this.charges.cancelCharge(chargeId);
    }

    updateCharge({ chargeId, amount, currency }) {

        let customerId = "";
        for(let i = 0; i < this.charges.pendingCharges.length; i++) {
            if(this.charges.pendingCharges[i].chargeId === chargeId) {
                customerId = this.charges.pendingCharges[i].customerId
                this.charges.cancelCharge(chargeId);
                this.charges.chargeCurrency = currency;
                return this.charges.createCharge(customerId, amount);
            }
        }

        return chargeId;

    }

    listCharges() {
        let data = []
        for(let charge of this.charges.pendingCharges) {
            let strs = charge.value.split(" ");
            data.push({
                chargeId: charge.chargeId,
                customerId: charge.customerId,
                amount: Number(strs[0]),
                currency: strs[1]
            })
        }
        return data;
    }
}

module.exports = ExternalPaymentServiceAdapter;
