import type { Schema, Struct } from '@strapi/strapi';

export interface MenuMenuCategory extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_categories';
  info: {
    description: '';
    displayName: 'MenuCategory';
    icon: 'bulletList';
  };
  attributes: {
    contents: Schema.Attribute.Component<'menu.menu-item', true> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String;
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
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'menu.menu-category': MenuMenuCategory;
      'menu.menu-item': MenuMenuItem;
    }
  }
}
