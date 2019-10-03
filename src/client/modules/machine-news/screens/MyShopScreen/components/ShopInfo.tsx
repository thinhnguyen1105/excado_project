import React from 'react';
import { Formik, FormikContext } from 'formik';
import * as yup from 'yup';
import { Form, Input, Col, Row, Card, Upload, Button, Icon, message, Modal, Tag } from 'antd';
import { validateField } from '../../../../../core';
import './ShopInfo.less';
import { UploadFile } from 'antd/lib/upload/interface';
import { config } from '@client/config';
import MapWithSearchBox from '@client/components/MapWithSearchBox/MapWithSearchBox';
import { Shop } from '@client/services/service-proxies';
import { isMobile } from 'react-device-detect';
import { withNamespaces } from '@client/i18n';
import moment from 'moment';

interface Props {
  introImageList: {
    file?: UploadFile;
    base64Url: string;
  }[];
  logoImageList: {
    file?: UploadFile;
    base64Url: string;
  }[];
  loading: boolean;
  shopInfo: Shop;
  updateShop: (payload: { [key: string]: any }) => void;
  addIntroImage: (file: UploadFile) => void;
  removeIntroImage: (file: UploadFile) => void;
  changeLogoImage: (file: UploadFile) => void;
  openExtendModal: () => void;
  t: (key: string) => string;
}
interface State {
  previewVisible: boolean;
  previewImage: string;
}
class ShopInfo extends React.PureComponent<Props, State> {
  state: State = {
    previewVisible: false,
    previewImage: '',
  };

  logoImageBeforeUpload = (file: UploadFile) => {
    if (config.upload.allowImageExt.test(file.name)) {
      this.props.changeLogoImage(file);
    } else {
      message.error(this.props.t('my-shop:allow-image'));
    }

    return false;
  }

  introImageBeforeUpload = (file: UploadFile) => {
    if (this.props.introImageList.length < config.upload.shopIntroImageNumber && config.upload.allowImageExt.test(file.name)) {
      this.props.addIntroImage(file);
    } else {
      message.error(this.props.t('my-shop:image-limit'));
    }

    return false;
  }

  removeIntroImage = (file: UploadFile) => {
    this.props.removeIntroImage(file);
  }

  handleCancel = () => this.setState({
    previewVisible: false,
    previewImage: '',
  })

  handlePreview = (file: any) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  render() {
    const translate = this.props.t;
    const ShopValidateSchema = yup.object().shape({
      name: yup.string()
        .min(5, translate('my-shop:shop-name-is-too-short'))
        .max(50, translate('my-shop:shop-name-is-too-long'))
        .required(translate('my-shop:please-filled-your-shop-name')),
      phone: yup.string()
        .matches(config.regex.phone, translate('my-shop:invalid-phone-number'))
        .required(translate('my-shop:please-filled-your-phone-number'))
        .max(14, translate('my-shop:invalid-phone-number')),
      domain: yup.string()
        .matches(config.regex.domain, translate('my-shop:domain-error'))
        .max(50, translate('my-shop:domain-is-too-long'))
        .required(translate('my-shop:please-filled-your-domain')),
      address: yup.string()
        .min(10, translate('my-shop:address-too-short'))
        .max(500, translate('my-shop:address-too-long')),
      email: yup.string()
        .matches(config.regex.email, translate('my-shop:invalid-email'))
        .required(translate('my-shop:please-filled-your-email')),
      description: yup.string()
        .min(50, translate('my-shop:introduce-is-too-short'))
        .max(2000, translate('my-shop:introduce-is-too-long'))
        .required(translate('my-shop:please-filled-your-introduce')),
      representative: yup.object()
        .shape({
          fullName: yup.string()
            .required(translate(`my-shop:representative-name-required`))
            .min(2, translate(`my-shop:representative-name-too-short`))
            .max(30, translate(`my-shop:representative-name-too-long`)),
          identityNumber: yup.string()
            .required(translate('my-shop:identity-required'))
            .matches(config.regex.identityNumber, translate(`my-shop:invalid-identity-number`))
            .min(5, translate(`my-shop:identity-too-short`))
            .max(30, translate(`my-shop:identity-too-long`)),
          email: yup.string()
            .required(translate('my-shop:representative-email-required'))
            .matches(config.regex.email, translate(`my-shop:invalid-email`)),
          paymentPhoneNo: yup.string()
            .matches(config.regex.phone, translate(`my-shop:invalid-phone-number`))
            .required(translate(`my-shop:payment-phone-required`)),
          address: yup.string()
            .required(translate(`my-shop:representative-address-required`))
            .max(500, translate(`my-shop:representative-address-too-long`)),
        }),
    });

    const uploadButton = (
      <div>
        <Icon type='plus' />
        <div className='ant-upload-text'>Upload</div>
      </div>
    );

    return (
      <Formik
        initialValues={{
          name: this.props.shopInfo.name,
          phone: this.props.shopInfo.phone,
          domain: this.props.shopInfo.domain,
          address: this.props.shopInfo.address,
          email: this.props.shopInfo.email,
          description: this.props.shopInfo.description,
          representative: {
            fullName: this.props.shopInfo.representative.fullName,
            identityNumber: this.props.shopInfo.representative.identityNumber,
            email: this.props.shopInfo.representative.email,
            paymentPhoneNo: this.props.shopInfo.representative.paymentPhoneNo,
            address: this.props.shopInfo.representative.address,
          },
        }}
        validateOnChange={true}
        validationSchema={ShopValidateSchema}
        onSubmit={async (values) => {
          this.props.updateShop(values);
        }}
      >
        {(context: FormikContext<any>) => (
          <div className='shop-info'>
            <Row type='flex' gutter={!isMobile ? 24 : 0} className='shop-info'>
              <Col lg={8} md={8} sm={24} xs={24}>
                <Card
                  style={{
                    padding: '20px 20px 0px 20px',
                    margin: '0 auto',
                    maxWidth: '240px',
                  }}
                  cover={
                    <div
                      className='shop-logo'
                      style={{
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                      }}
                    >
                      <img
                        src={this.props.logoImageList[0] ? this.props.logoImageList[0].base64Url ? this.props.logoImageList[0].base64Url : this.props.logoImageList as any : '/static/images/icon-shop.png'}
                        alt={this.props.shopInfo.name}
                        className='shop-logo-image'
                      />
                    </div>
                  }
                >
                  <Card.Meta
                    title={
                      <Upload
                        showUploadList={false}
                        beforeUpload={this.logoImageBeforeUpload}
                      >
                        <Button icon='upload'>Upload Logo</Button>
                      </Upload>
                    }
                  />
                </Card>

                <div className='expiry-info'>
                  <div style={{marginBottom: '10px'}}>{this.props.t('my-shop:join-date')}: <Tag color='#2db7f5'>{moment(new Date(this.props.shopInfo.createdAt)).format('DD/MM/YYYY')}</Tag></div>
                  <div style={{marginBottom: '10px'}}>{this.props.t('my-shop:expiry-date')}: <Tag color='#f50'>{moment(new Date(this.props.shopInfo.expiryDate)).format('DD/MM/YYYY')}</Tag></div>
                  <Button type='primary' onClick={this.props.openExtendModal}>{this.props.t(`my-shop:extend`)}</Button>
                </div>
              </Col>
              <Col lg={16} md={16} sm={24} xs={24}>
                <Form>
                  <Form.Item label={translate('my-shop:shop-name')} validateStatus={context.errors.name ? 'error' : undefined} help={context.errors.name}>
                    <Input
                      value={context.values.name}
                      onChange={context.handleChange}
                      onBlur={() => validateField({
                        fieldName: 'name',
                        validateSchema: ShopValidateSchema,
                        context,
                      })}
                      placeholder={translate('my-shop:input-your-shop-name')}
                      type='text' name='name'
                    />
                  </Form.Item>
                  <Form.Item label={translate('my-shop:phone-number')} validateStatus={context.errors.phone ? 'error' : undefined} help={context.errors.phone}>
                    <Input
                      value={context.values.phone}
                      onChange={context.handleChange}
                      onBlur={() => validateField({
                        fieldName: 'phone',
                        validateSchema: ShopValidateSchema,
                        context,
                      })}
                      placeholder={translate('my-shop:input-your-phone-number')}
                      type='text' name='phone'
                    />
                  </Form.Item>
                  <Form.Item label={translate('my-shop:shop-domain')} validateStatus={context.errors.domain ? 'error' : undefined} help={context.errors.domain}>
                    <Input
                      addonBefore='https://'
                      addonAfter='.timmay.vn'
                      value={context.values.domain}
                      onChange={context.handleChange}
                      onBlur={() => validateField({
                        fieldName: 'domain',
                        validateSchema: ShopValidateSchema,
                        context,
                      })}
                      placeholder={translate('my-shop:input-your-shop-domain')}
                      type='text' name='domain'
                    />
                  </Form.Item>
                  <Form.Item label={translate('my-shop:shop-address')} validateStatus={context.errors.address ? 'error' : undefined} help={context.errors.address}>
                    <MapWithSearchBox
                      geocode={this.props.shopInfo.geocode}
                      selectAddress={context.setFieldValue}
                      address={context.values.address}
                      t={this.props.t}
                    />
                  </Form.Item>
                  <Form.Item label={translate('my-shop:email')} validateStatus={context.errors.email ? 'error' : undefined} help={context.errors.email}>
                    <Input
                      value={context.values.email}
                      onChange={context.handleChange}
                      onBlur={() => validateField({
                        fieldName: 'email',
                        validateSchema: ShopValidateSchema,
                        context,
                      })}
                      placeholder={translate('my-shop:input-your-email')}
                      type='text' name='email'
                    />
                  </Form.Item>
                  <Form.Item label={translate('my-shop:introduce-store')} validateStatus={context.errors.description ? 'error' : undefined} help={context.errors.description}>
                    <Input.TextArea
                      value={context.values.description}
                      onChange={context.handleChange}
                      onBlur={() => validateField({
                        fieldName: 'description',
                        validateSchema: ShopValidateSchema,
                        context,
                      })}
                      placeholder={translate('my-shop:input-your-introduce-store')}
                      name='description'
                      autosize={{ minRows: 5 }}
                    />
                  </Form.Item>
                  <Form.Item label={translate('my-shop:representative-info')}>
                    <Form.Item
                      validateStatus={context.errors.representative && (context.errors.representative as any).fullName ? 'error' : undefined}
                      help={context.errors.representative ? (context.errors.representative as any).fullName : ``}
                    >
                      <Input
                        value={context.values.representative.fullName}
                        onChange={context.handleChange}
                        onBlur={() => validateField({
                          fieldName: 'representative.fullName',
                          validateSchema: ShopValidateSchema,
                          context,
                        })}
                        placeholder={translate('my-shop:representative-name')}
                        name='representative.fullName'
                      />
                    </Form.Item>
                    <Form.Item
                      validateStatus={context.errors.representative && (context.errors.representative as any).identityNumber ? 'error' : undefined}
                      help={context.errors.representative ? (context.errors.representative as any).identityNumber : ``}
                    >
                      <Input
                        value={context.values.representative.identityNumber}
                        onChange={context.handleChange}
                        onBlur={() => validateField({
                          fieldName: 'representative.identityNumber',
                          validateSchema: ShopValidateSchema,
                          context,
                        })}
                        placeholder={translate('my-shop:representative-identity-number')}
                        name='representative.identityNumber'
                      />
                    </Form.Item>
                    <Form.Item
                      validateStatus={context.errors.representative && (context.errors.representative as any).email ? 'error' : undefined}
                      help={context.errors.representative ? (context.errors.representative as any).email : ``}
                    >
                      <Input
                        value={context.values.representative.email}
                        onChange={context.handleChange}
                        onBlur={() => validateField({
                          fieldName: 'representative.email',
                          validateSchema: ShopValidateSchema,
                          context,
                        })}
                        placeholder={translate('my-shop:representative-email')}
                        name='representative.email'
                      />
                    </Form.Item>
                    <Form.Item
                      validateStatus={context.errors.representative && (context.errors.representative as any).paymentPhoneNo ? 'error' : undefined}
                      help={context.errors.representative ? (context.errors.representative as any).paymentPhoneNo : ``}
                    >
                      <Input
                        value={context.values.representative.paymentPhoneNo}
                        onChange={context.handleChange}
                        onBlur={() => validateField({
                          fieldName: 'representative.paymentPhoneNo',
                          validateSchema: ShopValidateSchema,
                          context,
                        })}
                        placeholder={translate('my-shop:representative-paymentPhoneNo')}
                        name='representative.paymentPhoneNo'
                      />
                    </Form.Item>
                    <Form.Item
                      validateStatus={context.errors.representative && (context.errors.representative as any).address ? 'error' : undefined}
                      help={context.errors.representative ? (context.errors.representative as any).address : ``}
                    >
                      <Input.TextArea
                        value={context.values.representative.address}
                        onChange={context.handleChange}
                        onBlur={() => validateField({
                          fieldName: 'representative.address',
                          validateSchema: ShopValidateSchema,
                          context,
                        })}
                        placeholder={translate('my-shop:representative-address')}
                        name='representative.address'
                      />
                    </Form.Item>
                  </Form.Item>
                  <Form.Item label={translate('my-shop:add-introduce-images')}>
                    <div className='clearfix'>
                      <Upload
                        listType='picture-card'
                        multiple={true}
                        beforeUpload={this.introImageBeforeUpload}
                        onRemove={this.removeIntroImage}
                        fileList={this.props.introImageList.map((item, index) => ({
                          uid: index,
                          name: index,
                          status: 'done',
                          url: item.base64Url || item,
                        })) as any}
                        onPreview={this.handlePreview}
                      >
                        {uploadButton}
                      </Upload>
                      <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt='example' style={{ width: '100%' }} src={this.state.previewImage} />
                      </Modal>
                    </div>
                  </Form.Item>
                </Form>
              </Col>
            </Row>

            <Row>
              <Button loading={this.props.loading} type='primary' onClick={() => context.handleSubmit()} className='next-button' size='large'>{this.props.t('my-shop:save').toUpperCase()}</Button>
            </Row>
          </div>
        )}
      </Formik>
    );
  }
}

export default withNamespaces('my-shop')(ShopInfo);