import type { Schema, Struct } from '@strapi/strapi';

export interface MenuMenuCategory extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_categories';
  info: {
    description: '';
    displayName: 'MenuCategory';
    icon: 'bulletList';
  };
  attributes: {
    name: Schema.Attribute.String;
    subCategory: Schema.Attribute.Component<'menu.sub-category', true>;
  };
}

export interface MenuMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_items';
  info: {
    description: '';
    displayName: 'MenuItem';
    icon: 'cup';
  };
  attributes: {
    alergens: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    price: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MenuSubCategory extends Struct.ComponentSchema {
  collectionName: 'components_menu_sub_categories';
  info: {
    displayName: 'SubCategory';
    icon: 'apps';
  };
  attributes: {
    contents: Schema.Attribute.Component<'menu.menu-item', true>;
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'menu.menu-category': MenuMenuCategory;
      'menu.menu-item': MenuMenuItem;
      'menu.sub-category': MenuSubCategory;
    }
  }
}
