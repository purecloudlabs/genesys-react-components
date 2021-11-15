export interface StringChangedCallback {
	(value: string): void;
}

export interface BooleanChangedCallback {
	(value?: boolean): void;
}

export interface VoidEventCallback {
	(): void;
}

// Item in a DxItemGroup
export interface DxItemGroupItem {
	label: string;
	value: string;
}

// Item value of a DxItemGroupItem in a DxItemGroup
export interface DxItemGroupItemValue {
	item: DxItemGroupItem;
	isSelected: boolean;
}

export interface ItemChangedCallback {
	(item: DxItemGroupItem, isSelected: boolean): void;
}

export interface ItemGroupChangedCallback {
	(items: DxItemGroupItemValue[]): void;
}
