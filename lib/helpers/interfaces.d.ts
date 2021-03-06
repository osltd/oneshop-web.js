export interface OrderInfo {
    items: string;
    coupons?: string;
    notes?: string;
    shippings?: any;
    shipping?: {
        address: string;
        country: string;
    };
    contact: {
        email?: string;
        phone?: string;
        first_name: string;
        last_name: string;
    };
    payment: {
        source?: string;
        card?: string;
        exp_date?: string;
        csc?: number;
    };
}
export interface QuotationInfo {
    coupons?: string;
    shippings?: any;
    shipping?: {
        address: string;
        country: string;
    };
    wallet?: {
        source?: string;
        method?: string;
        currency?: string;
        return_path?: string;
    };
    items: string;
}
