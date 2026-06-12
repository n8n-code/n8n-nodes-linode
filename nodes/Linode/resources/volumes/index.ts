import type { INodeProperties } from 'n8n-workflow';

export const volumesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					]
				}
			},
			"options": [
				{
					"name": "Get Volumes",
					"value": "Get Volumes",
					"action": "Volumes List",
					"description": "Returns a paginated list of Volumes you have permission to view.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/volumes"
						}
					}
				},
				{
					"name": "Create Volume",
					"value": "Create Volume",
					"action": "Volume Create",
					"description": "Creates a Volume on your Account. In order for this to complete successfully, your User must have the `add_volumes` grant. Creating a new Volume will start accruing additional charges on your account.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/volumes"
						}
					}
				},
				{
					"name": "Delete Volume",
					"value": "Delete Volume",
					"action": "Volume Delete",
					"description": "Deletes a Volume you have permission to `read_write`.\n\n* **Deleting a Volume is a destructive action and cannot be undone.**\n\n* Deleting stops billing for the Volume. You will be billed for time used within\nthe billing period the Volume was active.\n\n* Volumes that are migrating cannot be deleted until the migration is finished.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/volumes/{{$parameter[\"volumeId\"]}}"
						}
					}
				},
				{
					"name": "Get Volume",
					"value": "Get Volume",
					"action": "Volume View",
					"description": "Get information about a single Volume.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/volumes/{{$parameter[\"volumeId\"]}}"
						}
					}
				},
				{
					"name": "Update Volume",
					"value": "Update Volume",
					"action": "Volume Update",
					"description": "Updates a Volume that you have permission to `read_write`.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/volumes/{{$parameter[\"volumeId\"]}}"
						}
					}
				},
				{
					"name": "Attach Volume",
					"value": "Attach Volume",
					"action": "Volume Attach",
					"description": "Attaches a Volume on your Account to an existing Linode on your Account. In order for this request to complete successfully, your User must have `read_only` or `read_write` permission to the Volume and `read_write` permission to the Linode. Additionally, the Volume and Linode must be located in the same Region.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/volumes/{{$parameter[\"volumeId\"]}}/attach"
						}
					}
				},
				{
					"name": "Clone Volume",
					"value": "Clone Volume",
					"action": "Volume Clone",
					"description": "Creates a Volume on your Account. In order for this request to complete successfully, your User must have the `add_volumes` grant. The new Volume will have the same size and data as the source Volume. Creating a new Volume will incur a charge on your Account.\n* Only Volumes with a `status` of \"active\" can be cloned.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/volumes/{{$parameter[\"volumeId\"]}}/clone"
						}
					}
				},
				{
					"name": "Detach Volume",
					"value": "Detach Volume",
					"action": "Volume Detach",
					"description": "Detaches a Volume on your Account from a Linode on your Account. In order for this request to complete successfully, your User must have `read_write` access to the Volume and `read_write` access to the Linode.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/volumes/{{$parameter[\"volumeId\"]}}/detach"
						}
					}
				},
				{
					"name": "Resize Volume",
					"value": "Resize Volume",
					"action": "Volume Resize",
					"description": "Resize an existing Volume on your Account. In order for this request to complete successfully, your User must have the `read_write` permissions to the Volume.\n* Volumes can only be resized up.\n* Only Volumes with a `status` of \"active\" can be resized.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/volumes/{{$parameter[\"volumeId\"]}}/resize"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /volumes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Get Volumes"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Get Volumes"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Get Volumes"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Get Volumes"
					]
				}
			}
		},
		{
			"displayName": "POST /volumes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Create Volume"
					]
				}
			}
		},
		{
			"displayName": "Config ID",
			"name": "config_id",
			"type": "number",
			"default": 23456,
			"description": "When creating a Volume attached to a Linode, the ID of the Linode Config to include the new Volume in. This Config must belong to the Linode referenced by `linode_id`. Must _not_ be provided if `linode_id` is not sent. If a `linode_id` is sent without a `config_id`, the volume will be attached:\n\n  * to the Linode's only config if it only has one config.\n  * to the Linode's last used config, if possible.\n\nIf no config can be selected for attachment, an error will be returned.\n",
			"routing": {
				"send": {
					"property": "config_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Create Volume"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "my-volume",
			"description": "The Volume's label, which is also used in the `filesystem_path` of the resulting volume.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Create Volume"
					]
				}
			}
		},
		{
			"displayName": "Linode ID",
			"name": "linode_id",
			"type": "number",
			"default": 123,
			"description": "The Linode this volume should be attached to upon creation. If not given, the volume will be created without an attachment.\n",
			"routing": {
				"send": {
					"property": "linode_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Create Volume"
					]
				}
			}
		},
		{
			"displayName": "Region",
			"name": "region",
			"type": "string",
			"default": null,
			"description": "The Region to deploy this Volume in. This is only required if a linode_id is not given.\n",
			"routing": {
				"send": {
					"property": "region",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Create Volume"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"type": "number",
			"default": 20,
			"description": "The initial size of this volume, in GB.  Be aware that volumes may only be resized up after creation.\n",
			"routing": {
				"send": {
					"property": "size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Create Volume"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"example tag\",\n  \"another example\"\n]",
			"description": "An array of Tags applied to this object.  Tags are for organizational purposes only.\n",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Create Volume"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Create Volume"
					]
				}
			}
		},
		{
			"displayName": "DELETE /volumes/{volumeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Delete Volume"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Delete Volume"
					]
				}
			}
		},
		{
			"displayName": "GET /volumes/{volumeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Get Volume"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Get Volume"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Get Volume"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Get Volume"
					]
				}
			}
		},
		{
			"displayName": "PUT /volumes/{volumeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Update Volume"
					]
				}
			}
		},
		{
			"displayName": "Linode ID",
			"name": "linode_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "linode_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Update Volume"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Update Volume"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Update Volume"
					]
				}
			}
		},
		{
			"displayName": "POST /volumes/{volumeId}/attach",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Attach Volume"
					]
				}
			}
		},
		{
			"displayName": "Config ID",
			"name": "config_id",
			"type": "number",
			"default": 23456,
			"description": "The ID of the Linode Config to include this Volume in. Must belong to the Linode referenced by `linode_id`. If not given, the last booted Config will be chosen.\n",
			"routing": {
				"send": {
					"property": "config_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Attach Volume"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Linode ID",
			"name": "linode_id",
			"type": "number",
			"default": 0,
			"description": "The ID of the Linode to attach the volume to.",
			"routing": {
				"send": {
					"property": "linode_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Attach Volume"
					]
				}
			}
		},
		{
			"displayName": "Persist Across Boots",
			"name": "persist_across_boots",
			"type": "boolean",
			"default": true,
			"description": "Defaults to true, if false is provided, the Volume will not be attached to the Linode Config. In this case more than 8 Volumes may be attached to a Linode if a Linode has 16GB of RAM or more. The number of volumes that can be attached is equal to the number of GB of RAM that the Linode has, up to a maximum of 64. `config_id` should not be passed if this is set to false and linode_id must be passed. The Linode must be running.\n",
			"routing": {
				"send": {
					"property": "persist_across_boots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Attach Volume"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Attach Volume"
					]
				}
			}
		},
		{
			"displayName": "POST /volumes/{volumeId}/clone",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Clone Volume"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "my-volume",
			"description": "The Volume's label is for display purposes only.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Clone Volume"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Clone Volume"
					]
				}
			}
		},
		{
			"displayName": "POST /volumes/{volumeId}/detach",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Detach Volume"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Detach Volume"
					]
				}
			}
		},
		{
			"displayName": "POST /volumes/{volumeId}/resize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Resize Volume"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Size",
			"name": "size",
			"type": "number",
			"default": 30,
			"description": "The Volume's size, in GiB.\n",
			"routing": {
				"send": {
					"property": "size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Resize Volume"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes"
					],
					"operation": [
						"Resize Volume"
					]
				}
			}
		},
];
