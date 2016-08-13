import defs from '../_core/defs';

// returns an array which contains all data keys
export default function keys() {
    const def = defs.get(this);

    if(!def) {
        return [];
    }

    return Object.keys(def.keys);
}
